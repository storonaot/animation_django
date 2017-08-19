from django.db import models
from datetime import date

from app.models.cover import Cover
from app.models.serial import Serial

class Season(models.Model):
    title = models.CharField(max_length=200, blank=True, null=True)
    number = models.PositiveIntegerField(default=1)
    start_date = models.DateField(default=date.today)
    cover = models.ForeignKey(Cover, blank=True, null=True)
    serial = models.ForeignKey(Serial)

    def __str__(self):
        return "%s %s" % (self.serial.title, self.number)
