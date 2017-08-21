from django.db.models import Q

from rest_framework.generics import (
    DestroyAPIView,
    ListAPIView,
    UpdateAPIView,
    RetrieveAPIView,
    CreateAPIView,
    )
from app.models.film import Film
from app.api.serializers.film import (
    FilmDetailSerialiser,
    FilmListSerializer,
    FilmCreateUpdateSerializer,
    )

class FilmCreateAPIView(CreateAPIView):
    queryset = Film.objects.all()
    serializer_class = FilmCreateUpdateSerializer

class FilmDetailAPIView(RetrieveAPIView):
    queryset = Film.objects.all()
    serializer_class = FilmDetailSerialiser

class FilmUpdateAPIView(UpdateAPIView):
    queryset = Film.objects.all()
    serializer_class = FilmCreateUpdateSerializer

class FilmDeleteAPIView(DestroyAPIView):
    queryset = Film.objects.all()
    serializer_class = FilmDetailSerialiser

class FilmListAPIView(ListAPIView):
    # 24000000ms == 40m
    queryset = Film.objects.all()
    # queryset = Film.objects.filter(Q(time_ms__lte=24000000), Q(serial__isnull=True))
    serializer_class = FilmListSerializer
