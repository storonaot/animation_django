from django.conf.urls import url
from django.contrib import admin

from app.api.views.fulllength import (
    FullLengthListAPIView,
    FullLengthCreateAPIView,
    FullLengthDetailAPIView,
    FullLengthUpdateAPIView,
    FullLengthDeleteAPIView,
    FullLengthLastSixAPIView,
    )

urlpatterns = [
    url(r'^$', FullLengthListAPIView.as_view(), name='list'),
    url(r'^last$', FullLengthLastSixAPIView.as_view(), name='last'),
    url(r'^create/$', FullLengthCreateAPIView.as_view(), name='create'),
    url(r'^(?P<pk>\d+)/$', FullLengthDetailAPIView.as_view(), name='detail'),
    url(r'^(?P<pk>\d+)/edit/$', FullLengthUpdateAPIView.as_view(), name='update'),
    url(r'^(?P<pk>\d+)/delete/$', FullLengthDeleteAPIView.as_view(), name='delete')
]
