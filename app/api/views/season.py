from django.db.models import Q

from rest_framework.generics import (
    ListAPIView,
    # RetrieveAPIView,
    )
from app.models.season import Season

from app.api.serializers.season import (
    SeasonListSerializer,
    )
#
class SeasonListAPIView(ListAPIView):
    serializer_class = SeasonListSerializer

    def get_queryset(self):
        serial_id = self.kwargs['pk']
        return Season.objects.filter(Q(serial=serial_id))



        # queryset = Film.objects.all()
        # # queryset = Film.objects.filter(Q(time_ms__lte=24000000), Q(serial__isnull=True))
        # serializer_class = FilmListSerializer

# class SerialDetailAPIView(RetrieveAPIView):
#     queryset = Serial.objects.all()
#     serializer_class = SerialDetailSerialiser
