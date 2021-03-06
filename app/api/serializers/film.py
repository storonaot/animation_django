from rest_framework.serializers import ModelSerializer
from app.models.film import Film
from .audiotrack import AudiotrackSerializer
from .videoformat import VideoformatSerializer
from .language import LanguageSerializer
from .dvd import DVDListSerializer
from .serial import SerialListSerializer
from .season import SeasonSerializer
from .mediacontainer import MediacontainerSerializer
from .country import CountrySerializer
from .director import DirectorSerializer
from .studio import StudioSerializer

class FilmCreateUpdateSerializer(ModelSerializer):
    class Meta:
        model = Film
        fields = '__all__'

class FilmDetailSerialiser(ModelSerializer):
    audiotracks = AudiotrackSerializer(many=True, read_only=True)
    videoformat = VideoformatSerializer(read_only=True)
    original_language= LanguageSerializer(read_only=True)
    dvd = DVDListSerializer(read_only=True)
    serial = SerialListSerializer(read_only=True)
    season = SeasonSerializer(read_only=True)
    mediacontainer = MediacontainerSerializer(read_only=True)
    countries = CountrySerializer(many=True, read_only=True)
    directors = DirectorSerializer(many=True, read_only=True)
    studios = StudioSerializer(many=True, read_only=True)
    subtitles = LanguageSerializer(many=True, read_only=True)
    class Meta:
        model = Film
        fields = '__all__'

class FilmListSerializer(ModelSerializer):
    directors = DirectorSerializer(many=True, read_only=True)

    class Meta:
        model = Film
        fields = [
            'id',
            'title',
            'original_title',
            'description',
            'time_ms',
            'directors',
            'release_date',
            'cover',
            'liked',
            'watched',
            'selected'
        ]
