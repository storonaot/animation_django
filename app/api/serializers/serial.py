from rest_framework.serializers import ModelSerializer
from app.models.serial import Serial
from .country import CountrySerializer
from .director import DirectorSerializer
from .studio import StudioSerializer

class SerialListSerializer(ModelSerializer):
    class Meta:
        model = Serial
        fields = [
            'id',
            'title',
            'original_title',
            'start_date',
            'end_date',
            'cover',
        ]

class SerialDetailSerialiser(ModelSerializer):
    countries = CountrySerializer(many=True, read_only=True)
    directors = DirectorSerializer(many=True, read_only=True)
    studios = StudioSerializer(many=True, read_only=True)
    class Meta:
        model = Serial
        fields = '__all__'
