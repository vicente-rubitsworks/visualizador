from rest_framework import serializers

class LabelSerializer(serializers.Serializer):
    label = serializers.CharField(max_length=2000)
 

class CommentSerializer(serializers.Serializer):
    label = serializers.CharField(max_length=2000)
    content = serializers.IntegerField()