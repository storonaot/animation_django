# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2017-08-19 18:19
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0014_auto_20170819_1815'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subtitles',
            name='language',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.Language'),
        ),
    ]
