# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2017-08-19 20:19
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0021_auto_20170819_1954'),
    ]

    operations = [
        migrations.AlterField(
            model_name='film',
            name='countries',
            field=models.ManyToManyField(blank=True, null=True, to='app.Country'),
        ),
        migrations.AlterField(
            model_name='film',
            name='cover',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='app.Cover'),
        ),
        migrations.AlterField(
            model_name='film',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='film',
            name='mediacontainer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.Mediacontainer'),
        ),
        migrations.AlterField(
            model_name='film',
            name='time_ms',
            field=models.PositiveIntegerField(),
        ),
    ]
