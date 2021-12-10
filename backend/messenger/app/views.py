from django.db.models import fields
from django.http.response import HttpResponse
from django.shortcuts import render
from app import models
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers

# Create your views here.
@csrf_exempt
def add_user(request):
    user = models.User()
    user.Username = request.POST['username']
    user.Email = request.POST['email']
    user.Phone = request.POST['phone']
    user.Password = request.POST['password']
    user.save()

def get_users(request):
    data = serializers.serialize('json', models.User.objects.all())
    return HttpResponse(data)
