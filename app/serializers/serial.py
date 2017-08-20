from rest_framework import serializers
from app.models.serial import Serial

class SerialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Serial
        fields = '__all__'
