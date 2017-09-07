from django.conf.urls import url
from django.contrib import admin

from app.api.views.dvd import (
    DVDLastSixAPIView,
    )

urlpatterns = [
    url(r'^last$', DVDLastSixAPIView.as_view(), name='last'),
]
