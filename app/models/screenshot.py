from django.db import models
from app.models.film import Film

from uuid import uuid4
import os

# Повторяющийся код, переписать
class Screenshot(models.Model):
    def get_file_path(self, filename):
        extension = filename.split('.')[-1]
        filename = "%s.%s" % (uuid4(), extension)
        return os.path.join('public/uploads/screenshots/', filename)

    upload_path = models.ImageField(
        verbose_name=u'Poster',
        upload_to=get_file_path,
        max_length=256,
        blank=True,
        null=True
    )
    film = models.ForeignKey(Film, on_delete=models.CASCADE, default=1)
