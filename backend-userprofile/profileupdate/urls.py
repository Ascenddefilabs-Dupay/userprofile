from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CustomUserViewSet #FetchQRCodeView
from .views import update_profile_privacy


router = DefaultRouter()

router.register(r'profile',CustomUserViewSet,basename="myProfile")







urlpatterns = [
    path('',include(router.urls)),
    # path('profile/<pk>/', UserProfileView.as_view())
    path('userprofileapi/update-privacy/<str:user_id>/', update_profile_privacy, name='update_profile_privacy'),
    # path('fetch-qr-code/', FetchQRCodeView.as_view(), name='fetch_qr_code'),
]
