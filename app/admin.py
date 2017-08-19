from django.contrib import admin
from .models import Audiotrack, Director, Country, Studio, Film, Cover, Videoformat, Language, DVD, Serial, Season, Mediacontainer, Screenshot

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
