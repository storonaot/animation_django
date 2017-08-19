from django.db import models

class Videoformat(models.Model):
    title = models.CharField(max_length=200)
    resolution = models.CharField(max_length=200, unique=True)
    ratio = models.CharField(max_length=200)
    format = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return "%s (%s)" % (self.resolution, self.format)
