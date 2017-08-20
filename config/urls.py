from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns

from app.views.index import IndexTemplate

urlpatterns = [
    url(r'^$', IndexTemplate),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^films/', include("app.urls.films", namespace='films')),
]

urlpatterns = format_suffix_patterns(urlpatterns)

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
