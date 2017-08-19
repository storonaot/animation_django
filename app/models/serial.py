from django.db import models
from datetime import date

from app.models.cover import Cover
from app.models.studio import Studio
from app.models.director import Director
from app.models.country import Country

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
