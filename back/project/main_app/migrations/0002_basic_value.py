# Generated by Django 3.0.3 on 2020-02-28 00:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='basic',
            name='value',
            field=models.IntegerField(default=0),
        ),
    ]