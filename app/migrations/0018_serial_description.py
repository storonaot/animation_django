# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2017-08-19 19:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0017_auto_20170819_1907'),
    ]

    operations = [
        migrations.AddField(
            model_name='serial',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
