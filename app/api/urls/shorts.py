from django.conf.urls import url
from django.contrib import admin

from app.api.views.short import (
        ShortListAPIView,
    )

urlpatterns = [
    url(r'^$', ShortListAPIView.as_view(), name='list'),
]
