from django.db.models import Q
from rest_framework.generics import(
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView
    )
from app.models.film import Film
from app.api.serializers.episode import (
    EpisodeListSerializer,
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
class EpisodeLastSixAPIView(ListAPIView):
    queryset = Film.objects.filter(Q(serial__isnull=False)).order_by('-id')[:6]
    serializer_class = EpisodeListSerializer
