from django.db.models import Q
from rest_framework.generics import(
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView
    )
from app.models.dvd import DVD
from app.api.serializers.dvd import (
    DVDListSerializer,
    )
#
# class FullLengthListAPIView(ListAPIView):
#     # 24000000ms == 40m
#     # lte <=
#     queryset = Film.objects.filter(Q(time_ms__gt=24000000), Q(serial__isnull=True))
#     serializer_class = FullLengthListSerializer
#
# class FullLengthCreateAPIView(CreateAPIView):
#     queryset = Film.objects.all()
#     serializer_class = FullLengthCreateUpdateSerializer
#
# class FullLengthDetailAPIView(RetrieveAPIView):
#     queryset = Film.objects.all()
#     serializer_class = FullLengthDetailSerialiser
#
# class FullLengthUpdateAPIView(UpdateAPIView):
#     queryset = Film.objects.all()
#     serializer_class = FullLengthCreateUpdateSerializer
#
# class FullLengthDeleteAPIView(DestroyAPIView):
#     queryset = Film.objects.all()
#     serializer_class = FullLengthDetailSerialiser
#
class DVDLastSixAPIView(ListAPIView):
    queryset = DVD.objects.all().order_by('-id')[:6]
    serializer_class = DVDListSerializer
