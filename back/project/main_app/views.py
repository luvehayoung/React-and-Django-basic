from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Basic
from .serializers import BasicSerializer
import json
from django.http import JsonResponse, Http404


class Default(APIView):
    #get project info
    def get(self, request):
        columns = []
        for field in Basic._meta.fields:
            columns.append(field.get_attname_column()[0])        
        return JsonResponse({'columns': columns }, safe=False)    

# Create your views here.
class Index(APIView):
    #main
    def get_object(self, pk):
        try:
            return Basic.objects.get(pk = int(pk))
        except:
            raise Http404

    def get(self, request, pk, size):
        if pk == "-1":
            queryset = Basic.objects.all()[:int(size)]
            serializer = BasicSerializer(queryset, many=True)
            return Response(serializer.data)
        else:
            content = self.get_object(pk)
            serializer = BasicSerializer(content)
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