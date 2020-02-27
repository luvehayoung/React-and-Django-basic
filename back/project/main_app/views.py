from django.shortcuts import render
from rest_framework import generics

from .models import Basic
from .serializers import BasicSerializer

# Create your views here.
class Index(generics.ListCreateAPIView):
    queryset = Basic.objects.all()
    serializer_class = BasicSerializer

