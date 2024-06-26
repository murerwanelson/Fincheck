# Generated by Django 4.2.13 on 2024-06-30 13:27

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("talent", "0003_alter_company_date_of_reg_alter_company_email_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="company",
            name="date_of_reg",
            field=models.DateField(
                default=datetime.datetime(
                    2024, 6, 30, 13, 27, 9, 8120, tzinfo=datetime.timezone.utc
                )
            ),
        ),
        migrations.AlterField(
            model_name="role",
            name="date_started",
            field=models.DateField(
                default=datetime.datetime(
                    2024, 6, 30, 13, 27, 9, 9116, tzinfo=datetime.timezone.utc
                )
            ),
        ),
    ]
