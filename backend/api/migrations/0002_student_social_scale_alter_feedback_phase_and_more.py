# Generated by Django 4.2.5 on 2023-09-27 13:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='social_scale',
            field=models.PositiveIntegerField(choices=[(1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6)], default=3),
        ),
        migrations.AlterField(
            model_name='feedback',
            name='phase',
            field=models.CharField(choices=[('Creado', 'Creado'), ('En Proceso', 'En proceso'), ('Concluido', 'Concluido')], default='Concluido', max_length=100),
        ),
        migrations.AlterField(
            model_name='followup',
            name='phase',
            field=models.CharField(choices=[('Creado', 'Creado'), ('En Proceso', 'En proceso'), ('Concluido', 'Concluido')], default='En Proceso', max_length=100),
        ),
        migrations.AlterField(
            model_name='tickets',
            name='phase',
            field=models.CharField(choices=[('Creado', 'Creado'), ('En Proceso', 'En proceso'), ('Concluido', 'Concluido')], default='Creado', max_length=100),
        ),
    ]
