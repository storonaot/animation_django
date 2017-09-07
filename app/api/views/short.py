from django.db.models import Q
from rest_framework.generics import(
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView
    )
from app.models.film import Film
from app.api.serializers.short import (
    ShortListSerializer,
    ShortCreateUpdateSerializer,
    ShortDetailSerialiser,
    )

class ShortListAPIView(ListAPIView):
    # 24000000ms == 40m
    # lte <=
    queryset = Film.objects.filter(Q(time_ms__lte=24000000), Q(serial__isnull=True))
    serializer_class = ShortListSerializer

class ShortCreateAPIView(CreateAPIView):
    queryset = Film.objects.all()
    serializer_class = ShortCreateUpdateSerializer

class ShortDetailAPIView(RetrieveAPIView):
    queryset = Film.objects.all()
    serializer_class = ShortDetailSerialiser

class ShortUpdateAPIView(UpdateAPIView):
    queryset = Film.objects.all()
    serializer_class = ShortCreateUpdateSerializer

class ShortDeleteAPIView(DestroyAPIView):
    queryset = Film.objects.all()
    serializer_class = ShortDetailSerialiser

class ShortLastSixAPIView(ListAPIView):
    queryset = Film.objects.filter(Q(time_ms__lte=24000000), Q(serial__isnull=True)).order_by('-id')[:6]
    serializer_class = ShortListSerializer
