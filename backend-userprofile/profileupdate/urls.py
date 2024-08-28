from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet,CustomUserViewSet
from .views import update_profile_privacy


router = DefaultRouter()

router.register(r'projects',ProjectViewSet)
router.register(r'profile',CustomUserViewSet,basename="myProfile")







urlpatterns = [
    path('',include(router.urls)),
    # path('profile/<pk>/', UserProfileView.as_view())
    path('userprofileapi/update-privacy/<str:user_id>/', update_profile_privacy, name='update_profile_privacy'),
]
