from django.conf.urls import url
from django.contrib import admin

from app.api.views.serial import (
    SerialListAPIView,
    SerialDetailAPIView,
    )

urlpatterns = [
    url(r'^$', SerialListAPIView.as_view(), name='list'),
    url(r'^(?P<pk>\d+)/$', SerialDetailAPIView.as_view(), name='detail'),

]
