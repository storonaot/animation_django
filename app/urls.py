from django.conf.urls import include, url
from django.contrib import admin

from app.views.film import (
    film_list,
    film_create,
    film_detail,
    film_update,
    film_delete,
)

urlpatterns = [
    url(r'^$', film_list, name='list'),
    url(r'^create/$', film_create),
    url(r'^(?P<id>\d+)/$', film_detail, name='detail'),
    url(r'^(?P<id>\d+)/edit/$', film_update, name='update'),
    url(r'^(?P<id>\d+)/delete/$', film_delete),
]
