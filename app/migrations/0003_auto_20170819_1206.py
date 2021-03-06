# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2017-08-19 12:06
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20170817_2157'),
    ]

    operations = [
        migrations.AddField(
            model_name='film',
            name='release_date',
            field=models.DateField(default=datetime.date.today),
        ),
        migrations.AddField(
            model_name='season',
            name='start_date',
            field=models.DateField(default=datetime.date.today),
        ),
        migrations.AddField(
            model_name='serial',
            name='end_date',
            field=models.DateField(default=datetime.date.today),
        ),
        migrations.AddField(
            model_name='serial',
            name='start_date',
            field=models.DateField(default=datetime.date.today),
        ),
        migrations.AlterField(
            model_name='dvd',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='serial',
            name='cover',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='app.Cover'),
        ),
        migrations.AlterField(
            model_name='studio',
            name='title',
            field=models.CharField(max_length=200, unique=True),
        ),
    ]
