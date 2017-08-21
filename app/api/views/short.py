from rest_framework.generics import ListAPIView, RetrieveAPIView
from app.models.film import Film
from app.api.serializers.short import ShortListSerializer

class ShortListAPIView(ListAPIView):
    queryset = Film.objects.all()
    serializer_class = ShortListSerializer
#
# class FilmDetailAPIView(RetrieveAPIView):
#     queryset = Film.objects.all()
#     serializer_class = FilmListSerializer
