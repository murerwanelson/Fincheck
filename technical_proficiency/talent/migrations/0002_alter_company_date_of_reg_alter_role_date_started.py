# Generated by Django 4.2.13 on 2024-06-28 06:36

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("talent", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="company",
            name="date_of_reg",
            field=models.DateField(
                default=datetime.datetime(
                    2024, 6, 28, 6, 36, 10, 570694, tzinfo=datetime.timezone.utc
                )
            ),
        ),
        migrations.AlterField(
            model_name="role",
            name="date_started",
            field=models.DateField(
                default=datetime.datetime(
                    2024, 6, 28, 6, 36, 10, 573222, tzinfo=datetime.timezone.utc
                )
            ),
        ),
    ]