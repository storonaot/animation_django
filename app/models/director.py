from django.db import models

class Director(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True, unique=True)
    original_name = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.name or self.original_name
