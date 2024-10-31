from django.shortcuts import render
from rest_framework import viewsets
from .models import CustomUser
from .serializers import CustomUserSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import CustomUser
from django.views import View
from .serializers import CustomUserSerializer
from django.db import connection
from django.http import JsonResponse
# Create your views here.

# class UserProfileView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = UserProfile.objects.all()
#     serializer_class = UserProfileSerializer

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    lookup_field = 'user_id'

@api_view(['PATCH'])
def update_profile_privacy(request, user_id):
    try:
        user = CustomUser.objects.get(user_id=user_id)
    except CustomUser.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = CustomUserSerializer(user, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FetchQRCodeView(View):

    def get(self, request, *args, **kwargs):
        user_id = request.GET.get('user_id')  # Get user_id from query parameters
        if not user_id:
            return JsonResponse({'error': 'User ID is required.'}, status=400)

        qr_code = None
        email = None
        mobile_number = None
        first_name = None  # Variable to store the user's first name

        try:
            with connection.cursor() as cursor:
                # Query to fetch the qr_code, email, mobile number from fiat_wallet table 
                # and the user's name from the users table based on user_id
                cursor.execute("""
                    SELECT f.qr_code, f.fiat_wallet_email, f.fiat_wallet_phone_number, u.user_first_name
                    FROM fiat_wallet f
                    JOIN users u ON f.user_id = u.user_id
                    WHERE f.user_id = %s
                """, [user_id])
                
                row = cursor.fetchone()

                if row:
                    qr_code = row[0]  # Extract the QR code from the query result
                    email = row[1]    # Extract the email
                    mobile_number = row[2]  # Extract the mobile number
                    first_name = row[3]  # Extract the user's first name
                else:
                    return JsonResponse({'error': 'Details not found for this user ID.'}, status=404)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

        return JsonResponse({
            'qr_code': qr_code,
            'email': email,
            'mobile_number': mobile_number,
            'first_name': first_name  # Send the first name to the frontend
        })