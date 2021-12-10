# Generated by Django 3.2.9 on 2021-11-21 16:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Username', models.CharField(max_length=20)),
                ('Email', models.EmailField(max_length=254)),
                ('Phone', models.CharField(max_length=20)),
                ('Password', models.CharField(max_length=20)),
            ],
        ),
    ]
