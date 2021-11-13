from django.db import models

# Create your models here.
class User(models.Model):
    Username = models.CharField()
    Email = models.EmailField()
    Phone = models.CharField()
    Password = models.CharField()
