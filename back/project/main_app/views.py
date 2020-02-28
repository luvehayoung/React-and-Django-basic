from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Basic
from .serializers import BasicSerializer
import json
from django.http import JsonResponse
# Create your views here.
class Index(APIView):
    #main
    def get(self, request):
        queryset = Basic.objects.all()[:10]
        serializer = BasicSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        json_data = json.loads(request.body)
        row = Basic.objects.get(id=json_data['id'])
        row.value = json_data["value"]
        
        try:
            row.value1 = json_data["value1"]
        except KeyError:
            pass

        try:
            row.value2 = json_data["value2"]
        except KeyError:
            pass

        try:    
            row.value3 = json_data["value3"]
        except KeyError:
            pass
            
        row.save()
        return JsonResponse({'saved': True }, safe=False)    