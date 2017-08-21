from rest_framework.serializers import ModelSerializer
from app.models.season import Season

class SeasonSerializer(ModelSerializer):
    class Meta:
        model = Season
        fields = '__all__'

class SeasonListSerializer(ModelSerializer):
    class Meta:
        model = Season
        fields = '__all__'
