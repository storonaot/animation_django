from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    )

from app.models.serial import Serial

from app.api.serializers.serial import (
    SerialListSerializer,
    SerialDetailSerialiser,
    )

class SerialListAPIView(ListAPIView):
    queryset = Serial.objects.all()
    serializer_class = SerialListSerializer

class SerialDetailAPIView(RetrieveAPIView):
    queryset = Serial.objects.all()
    serializer_class = SerialDetailSerialiser
