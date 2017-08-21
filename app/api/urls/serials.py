from django.conf.urls import url
from django.contrib import admin

from app.api.views.serial import (
    SerialListAPIView,
    SerialDetailAPIView,
    )
from app.api.views.season import (
    SeasonListAPIView,
    )

urlpatterns = [
    url(r'^$', SerialListAPIView.as_view(), name='list'),
    url(r'^(?P<pk>\d+)/seasons/$', SeasonListAPIView.as_view(), name='seasons-list'),
    url(r'^(?P<pk>\d+)/$', SerialDetailAPIView.as_view(), name='detail'),
]
