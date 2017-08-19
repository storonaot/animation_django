from django.db import models

class Studio(models.Model):
    title = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.title
