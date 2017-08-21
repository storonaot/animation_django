from rest_framework import serializers
from app.models.videoformat import Videoformat

class VideoformatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Videoformat
        fields = '__all__'
