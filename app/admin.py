from django.contrib import admin

from app.models.audiotrack import Audiotrack
from app.models.director import Director
from app.models.country import Country
from app.models.film import Film
from app.models.cover import Cover
from app.models.videoformat import Videoformat
from app.models.language import Language
from app.models.dvd import DVD
from app.models.serial import Serial
from app.models.season import Season
from app.models.mediacontainer import Mediacontainer
from app.models.screenshot import Screenshot
from app.models.studio import Studio


admin.site.register(Cover)
admin.site.register(Screenshot)
admin.site.register(Studio)
admin.site.register(Country)
admin.site.register(Director)
admin.site.register(Videoformat)
admin.site.register(Language)
admin.site.register(DVD)
admin.site.register(Serial)
admin.site.register(Season)
admin.site.register(Mediacontainer)
admin.site.register(Audiotrack)
admin.site.register(Film)
