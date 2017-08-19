from django.db import models
from django.core.urlresolvers import reverse
from datetime import date

from uuid import uuid4
import os

class Cover(models.Model):
    def get_file_path(self, filename):
        extension = filename.split('.')[-1]
        filename = "%s.%s" % (uuid4(), extension)
        return os.path.join('uploads/covers/', filename)

    upload_path = models.ImageField(
        verbose_name=u'Poster',
        upload_to=get_file_path,
        max_length=256,
        blank=True,
        null=True
    )

class Studio(models.Model):
    title = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.title

class Country(models.Model):
    title = models.CharField(max_length=200, unique=True)
    code = models.CharField(max_length=5, unique=True)

    def __str__(self):
        return self.title

class Director(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True, unique=True)
    original_name = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.name or self.original_name

class Videoformat(models.Model):
    title = models.CharField(max_length=200)
    resolution = models.CharField(max_length=200, unique=True)
    ratio = models.CharField(max_length=200)
    format = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return "%s (%s)" % (self.resolution, self.format)

class Language(models.Model):
    title = models.CharField(max_length=200, unique=True)
    code = models.CharField(max_length=2, unique=True)

    def __str__(self):
        return "%s (%s)" % (self.title, self.code)

class Mediacontainer(models.Model):
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title

class Audiotrack(models.Model):
    title = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.title

class DVD(models.Model):
    title = models.CharField(max_length=200)
    original_title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    order_number = models.PositiveIntegerField(default=0)
    cover = models.ForeignKey(Cover, blank=True, null=True)

    def __str__(self):
        return self.title

class Serial(models.Model):
    title = models.CharField(max_length=200)
    original_title = models.CharField(max_length=200)
    start_date = models.DateField(default=date.today)
    end_date = models.DateField(default=date.today, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    cover = models.ForeignKey(Cover, blank=True, null=True)
    studios = models.ManyToManyField(Studio, blank=True)
    directors = models.ManyToManyField(Director)
    countries = models.ManyToManyField(Country)

    def __str__(self):
        return self.title

class Season(models.Model):
    title = models.CharField(max_length=200, blank=True, null=True)
    number = models.PositiveIntegerField(default=1)
    start_date = models.DateField(default=date.today)
    cover = models.ForeignKey(Cover, blank=True, null=True)
    serial = models.ForeignKey(Serial)

    def __str__(self):
        return "%s %s" % (self.serial.title, self.number)

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

    def __str__(self):
        if self.serial:
            return "%s (%s)" % (self.title, self.serial.title)
        return self.title

# Повторяющийся код, переписать
class Screenshot(models.Model):
    def get_file_path(self, filename):
        extension = filename.split('.')[-1]
        filename = "%s.%s" % (uuid4(), extension)
        return os.path.join('uploads/screenshots/', filename)

    upload_path = models.ImageField(
        verbose_name=u'Poster',
        upload_to=get_file_path,
        max_length=256,
        blank=True,
        null=True
    )
    film = models.ForeignKey(Film, on_delete=models.CASCADE, default=1)
