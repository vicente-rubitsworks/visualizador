from .serializers import CommentSerializer, TotalSerializer, DependenciaSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .classes import *
from .funciones import *

comment = []
dependencia=[]

for numero, valor in directorio_por_comuna().items():
    comment.append(Comment(label=numero, content=valor))

for numero, valor in dependencias().items():
    dependencia.append(Dependencia(cod=numero, total=valor))


class Comunas(APIView):
    """
    Puedo sacar por pantalla un texto :v
    """

    def get(self, request, format=None):
        serializer = CommentSerializer(comment, many=True)
        return Response(serializer.data)

class TotalView(APIView):
    def get(self, request, format=None):
        serializer = TotalSerializer(Total(total=total_establecimientos()))
        return Response(serializer.data)

class DependenciaView(APIView):
    def get(self, request, format=None):
        serializer = DependenciaSerializer(dependencia, many=True)
        return Response(serializer.data)
