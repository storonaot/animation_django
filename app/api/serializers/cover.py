from rest_framework import serializers
from app.models.cover import Cover

class CoverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cover
        fields = ['upload_path']
