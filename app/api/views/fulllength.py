from django.db.models import Q
from rest_framework.generics import(
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView
    )
from app.models.film import Film
from app.api.serializers.fulllength import (
    FullLengthListSerializer,
    FullLengthCreateUpdateSerializer,
    FullLengthDetailSerialiser,
    )

class FullLengthListAPIView(ListAPIView):
    # 24000000ms == 40m
    # lte <=
    queryset = Film.objects.filter(Q(time_ms__gt=24000000), Q(serial__isnull=True))
    serializer_class = FullLengthListSerializer

class FullLengthCreateAPIView(CreateAPIView):
    queryset = Film.objects.all()
    serializer_class = FullLengthCreateUpdateSerializer

class FullLengthDetailAPIView(RetrieveAPIView):
    queryset = Film.objects.all()
    serializer_class = FullLengthDetailSerialiser

class FullLengthUpdateAPIView(UpdateAPIView):
    queryset = Film.objects.all()
    serializer_class = FullLengthCreateUpdateSerializer

class FullLengthDeleteAPIView(DestroyAPIView):
    queryset = Film.objects.all()
    serializer_class = FullLengthDetailSerialiser

class FullLengthLastSixAPIView(ListAPIView):
    queryset = Film.objects.filter(Q(time_ms__gt=24000000), Q(serial__isnull=True)).order_by('-id')[:6]
    serializer_class = FullLengthListSerializer
