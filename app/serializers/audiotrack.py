from rest_framework import serializers
from app.models.audiotrack import Audiotrack

class AudiotrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Audiotrack
        fields = '__all__'
