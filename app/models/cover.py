from django.db import models
from uuid import uuid4
import os

class Cover(models.Model):
    def get_file_path(self, filename):
        extension = filename.split('.')[-1]
        filename = "%s.%s" % (uuid4(), extension)
        return os.path.join('public/uploads/covers/', filename)

    upload_path = models.ImageField(
        verbose_name=u'Poster',
        upload_to=get_file_path,
        max_length=256,
        blank=True,
        null=True
    )
