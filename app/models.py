from django.db import models
from django.core.urlresolvers import reverse

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

class Studio(models.Model):
    title = models.CharField(max_length=200)

class Country(models.Model):
    title = models.CharField(max_length=200)
    alias = models.CharField(max_length=10)

class Director(models.Model):
    name = models.CharField(max_length=200)
    original_name = models.CharField(max_length=200)

class Videoformat(models.Model):
    title = models.CharField(max_length=200)
    resolution = models.CharField(max_length=200)
    ratio = models.CharField(max_length=200)
    format = models.CharField(max_length=200)

class Language(models.Model):
    title = models.CharField(max_length=200)
    alias = models.CharField(max_length=200)

class DVD(models.Model):
    title = models.CharField(max_length=200)
    original_title = models.CharField(max_length=200)
    description = models.TextField()
    cover = models.ForeignKey(Cover, default=1)

class Serial(models.Model):
    title = models.CharField(max_length=200)
    original_title = models.CharField(max_length=200)
    cover = models.ForeignKey(Cover, default=1)
    studios = models.ManyToManyField(Studio)
    directors = models.ManyToManyField(Director)
    countries = models.ManyToManyField(Country)

class Season(models.Model):
    title = models.CharField(max_length=200)
    number = models.PositiveIntegerField(default=1)
    cover = models.ForeignKey(Cover, default=1)
    serial = models.ForeignKey(Serial, default=1)

class Mediacontainer(models.Model):
    title = models.CharField(max_length=200)

class Audiotrack(models.Model):
    title = models.CharField(max_length=200)

class Subtitles(models.Model):
    language = models.ForeignKey(Language, default=1)

class Film(models.Model):
    title = models.CharField(max_length=200)
    original_title = models.CharField(max_length=200)
    description = models.TextField()
    time_ms = models.PositiveIntegerField(default=2)
    cover = models.ForeignKey(Cover, default=1)
    videoformat = models.ForeignKey(Videoformat, default=1)
    original_language = models.ForeignKey(Language, default=1)
    dvd = models.ForeignKey(DVD, null=True, blank=True)
    serial = models.ForeignKey(Serial, null=True, blank=True)
    season = models.ForeignKey(Season, null=True, blank=True)
    mediacontainer = models.ForeignKey(Mediacontainer, default=1)
    countries = models.ManyToManyField(Country)
    directors = models.ManyToManyField(Director)
    studios = models.ManyToManyField(Studio)
    screenshots = models.ManyToManyField(Screenshot)
    subtitles = models.ManyToManyField(Subtitles)
    audiotracks = models.ManyToManyField(Audiotrack)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('films:detail', kwargs={ "id": self.id })
