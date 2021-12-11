from django.db import models

# Create your models here.
class User(models.Model):
    Username = models.CharField(max_length=30, null=True)
    Email = models.CharField(max_length=64, null=True)
    Phone = models.CharField(max_length=20, null=True)
    Password = models.CharField(max_length=20, null=True)
