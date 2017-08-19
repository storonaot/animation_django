from django.db import models

class Language(models.Model):
    title = models.CharField(max_length=200, unique=True)
    code = models.CharField(max_length=2, unique=True)

    def __str__(self):
        return "%s (%s)" % (self.title, self.code)
