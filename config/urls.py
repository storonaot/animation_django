from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns

from app.views import IndexTemplate

urlpatterns = [
    url(r'^$', IndexTemplate),
    url(r'^admin/', include(admin.site.urls)),
    # url(r'^films/', include("app.urls.films", namespace='films')),
    url(r'^api/films/', include('app.api.urls.films', namespace='films-api')),
    url(r'^api/shorts/', include('app.api.urls.shorts', namespace='shorts-api')),
    url(r'^api/fulllength/', include('app.api.urls.fulllength', namespace='fulllength-api')),
    url(r'^api/dvds/', include('app.api.urls.dvd', namespace='dvd-api')),
    url(r'^api/serials/', include('app.api.urls.serials', namespace='serials-api')),
]

urlpatterns = format_suffix_patterns(urlpatterns)

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
