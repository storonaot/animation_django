from rest_framework import serializers
from app.models.mediacontainer import Mediacontainer

class MediacontainerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mediacontainer
        fields = '__all__'
