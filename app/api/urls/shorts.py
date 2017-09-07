from django.conf.urls import url
from django.contrib import admin

from app.api.views.short import (
    ShortListAPIView,
    ShortCreateAPIView,
    ShortDetailAPIView,
    ShortUpdateAPIView,
    ShortDeleteAPIView,
    ShortLastSixAPIView,
    )

urlpatterns = [
    url(r'^$', ShortListAPIView.as_view(), name='list'),
    url(r'^last$', ShortLastSixAPIView.as_view(), name='last'),
    url(r'^create/$', ShortCreateAPIView.as_view(), name='create'),
    url(r'^(?P<pk>\d+)/$', ShortDetailAPIView.as_view(), name='detail'),
    url(r'^(?P<pk>\d+)/edit/$', ShortUpdateAPIView.as_view(), name='update'),
    url(r'^(?P<pk>\d+)/delete/$', ShortDeleteAPIView.as_view(), name='delete')

]
