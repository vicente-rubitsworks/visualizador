from rest_framework import serializers

class TotalSerializer(serializers.Serializer):
    total = serializers.IntegerField()
 

class CommentSerializer(serializers.Serializer):
    label = serializers.CharField(max_length=2000)
    content = serializers.IntegerField()

class DependenciaSerializer(serializers.Serializer):
    cod = serializers.CharField(max_length=2000)
    total = serializers.IntegerField()