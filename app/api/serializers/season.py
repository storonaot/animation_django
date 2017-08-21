from rest_framework import serializers
from app.models.season import Season

class SeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Season
        fields = '__all__'
