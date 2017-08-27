from django.db import models
from datetime import date, datetime

from app.models.cover import Cover
from app.models.videoformat import Videoformat
from app.models.language import Language
from app.models.dvd import DVD
from app.models.serial import Serial
from app.models.season import Season
from app.models.mediacontainer import Mediacontainer
from app.models.country import Country
from app.models.director import Director
from app.models.studio import Studio
from app.models.audiotrack import Audiotrack

class Film(models.Model):
    title = models.CharField(max_length=200)
    original_title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    time_ms = models.PositiveIntegerField(blank=True, null=True)
    # 10m -> 600 000 ms
    # 1m  -> 60 000 ms
    # 10s -> 10 000ms
    # 1s  -> 1 000ms
    release_date = models.DateField(default=date.today)
    cover = models.ForeignKey(Cover, blank=True, null=True)
    videoformat = models.ForeignKey(Videoformat, default=1)
    original_language = models.ForeignKey(Language, default=1, related_name='language')
    dvd = models.ForeignKey(DVD, null=True, blank=True)
    serial = models.ForeignKey(Serial, null=True, blank=True)
    season = models.ForeignKey(Season, null=True, blank=True)
    mediacontainer = models.ForeignKey(Mediacontainer, default=1)
    countries = models.ManyToManyField(Country, blank=True)
    directors = models.ManyToManyField(Director, blank=True)
    studios = models.ManyToManyField(Studio, blank=True)
    subtitles = models.ManyToManyField(Language, blank=True, related_name='subtitles')
    audiotracks = models.ManyToManyField(Audiotrack, blank=True)
    timestamp = models.DateTimeField(default=datetime.now, blank=True)
    liked = models.BooleanField(default=False)
    watched = models.BooleanField(default=False)
    selected = models.BooleanField(default=False)

    def __str__(self):
        if self.serial:
            return "%s (%s)" % (self.title, self.serial.title)
        return self.title
