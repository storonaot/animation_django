from django.db import models
from app.models.cover import Cover

class DVD(models.Model):
    title = models.CharField(max_length=200)
    original_title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    order_number = models.PositiveIntegerField(default=0)
    cover = models.ForeignKey(Cover, blank=True, null=True)

    def __str__(self):
        return "%s %s" % (self.order_number, self.title)
