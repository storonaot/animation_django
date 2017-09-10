from rest_framework import serializers
from app.models.film import Film

class EpisodeListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Film
        fields = '__all__'
