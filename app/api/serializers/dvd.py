from rest_framework import serializers
from app.models.dvd import DVD

class DVDListSerializer(serializers.ModelSerializer):
    class Meta:
        model = DVD
        fields = '__all__'


# from rest_framework.serializers import ModelSerializer
# from app.models.film import Film
# from .audiotrack import AudiotrackSerializer
# from .videoformat import VideoformatSerializer
# from .language import LanguageSerializer
# from .dvd import DVDSerializer
# from .mediacontainer import MediacontainerSerializer
# from .country import CountrySerializer
# from .director import DirectorSerializer
# from .studio import StudioSerializer
# from .cover import CoverSerializer
#
# class FullLengthListSerializer(ModelSerializer):
#     directors = DirectorSerializer(many=True, read_only=True)
#     cover = CoverSerializer(read_only=True)
#     class Meta:
#         model = Film
#         fields = [
#             'id',
#             'title',
#             'original_title',
#             'description',
#             'time_ms',
#             'directors',
#             'release_date',
#             'cover',
#             'liked',
#             'watched',
#             'selected'
#         ]
#
# class FullLengthDetailSerialiser(ModelSerializer):
#     audiotracks = AudiotrackSerializer(many=True, read_only=True)
#     videoformat = VideoformatSerializer(read_only=True)
#     original_language= LanguageSerializer(read_only=True)
#     dvd = DVDSerializer(read_only=True)
#     mediacontainer = MediacontainerSerializer(read_only=True)
#     countries = CountrySerializer(many=True, read_only=True)
#     directors = DirectorSerializer(many=True, read_only=True)
#     studios = StudioSerializer(many=True, read_only=True)
#     subtitles = LanguageSerializer(many=True, read_only=True)
#     class Meta:
#         model = Film
#         fields = '__all__'
#
# class FullLengthCreateUpdateSerializer(ModelSerializer):
#     class Meta:
#         model = Film
#         fields = '__all__'
