from django.conf.urls import url
from django.contrib import admin

from app.api.views.film import (
    FilmCreateAPIView,
    FilmDeleteAPIView,
    FilmDetailAPIView,
    FilmListAPIView,
    FilmUpdateAPIView,
    )

urlpatterns = [
    url(r'^$', FilmListAPIView.as_view(), name='list'),
    url(r'^create/$', FilmCreateAPIView.as_view(), name='create'),
    url(r'^(?P<pk>\d+)/$', FilmDetailAPIView.as_view(), name='detail'),
    url(r'^(?P<pk>\d+)/edit/$', FilmUpdateAPIView.as_view(), name='update'),
    url(r'^(?P<pk>\d+)/delete/$', FilmDeleteAPIView.as_view(), name='delete'),
]
