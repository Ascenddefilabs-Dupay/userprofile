from django.db import models

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)


    def __str__(self):
        return self.name
    
class Users(models.Model):
    first_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50, blank=True, null=True)
    last_name = models.CharField(max_length=50)
    dob = models.DateField()

    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=20)

    country = models.CharField(max_length=50)
    city = models.CharField(max_length=50)

    profile_photo = models.ImageField(upload_to='profile_photos/', blank=True, null=True)