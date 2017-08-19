from django.db import models

class Country(models.Model):
    title = models.CharField(max_length=200, unique=True)
    code = models.CharField(max_length=5, unique=True)

    def __str__(self):
        return self.title
