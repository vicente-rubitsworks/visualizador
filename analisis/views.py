from .serializers import CommentSerializer, LabelSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .classes import *
from .funciones import *

doble_label = ('uno', 'dos')
serial = LabelSerializer(Label(label='name'))
comment = []

for numero, valor in directorio_por_comuna().items():
    comment.append(Comment(label=numero, content=valor))


class Comunas(APIView):
    """
    Puedo sacar por pantalla un texto :v
    """

    def get(self, request, format=None):
        serializer = CommentSerializer(comment, many=True)
        return Response(serializer.data)
