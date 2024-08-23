from django.db import models
from cloudinary.models import CloudinaryField

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)


    def __str__(self):
        return self.name
    
class CustomUser(models.Model):
    user_id = models.CharField(max_length=8, primary_key=True)
    user_email = models.EmailField(unique=True)
    user_first_name = models.CharField(max_length=30)
    user_middle_name = models.CharField(max_length=30, blank=True)
    user_last_name = models.CharField(max_length=30)
    user_dob = models.DateField()
    user_phone_number = models.BigIntegerField()
    user_country = models.CharField(max_length=50)
    user_city = models.CharField(max_length=50)
    user_profile_photo = models.FileField(upload_to='profile_photos/', null=True, blank=True)
    user_address_line_1 = models.CharField()
    # user_address_line_2 = models.CharField()
    user_state= models.CharField()
    user_pin_code=models.CharField()
    profile_privacy = models.CharField(max_length=10, choices=[('public', 'Public'), ('private', 'Private')], default='public')
    
    class Meta:
        db_table = 'users'
        managed=False