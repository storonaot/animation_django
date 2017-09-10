from django.conf.urls import url
from django.contrib import admin

from app.api.views.episode import (
    EpisodeLastSixAPIView,
    )

urlpatterns = [
    url(r'^last$', EpisodeLastSixAPIView.as_view(), name='last'),
]
