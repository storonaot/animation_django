from rest_framework import serializers
from app.models.dvd import DVD

class DVDSerializer(serializers.ModelSerializer):
    class Meta:
        model = DVD
        fields = '__all__'
