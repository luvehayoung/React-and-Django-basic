from rest_framework import serializers
from .models import Basic


class BasicSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('data',)
        model = Basic