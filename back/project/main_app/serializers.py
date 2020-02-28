from rest_framework import serializers
from .models import Basic


class BasicSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'data', 'value', 'value1', 'value2', 'value3')
        model = Basic