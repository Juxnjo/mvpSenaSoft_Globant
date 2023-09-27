# Generated by Django 4.2.5 on 2023-09-27 20:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_student_social_scale_alter_feedback_phase_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='feedback',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='followup',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='student',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='student',
            name='password',
            field=models.CharField(default='User123', max_length=20),
        ),
        migrations.AlterField(
            model_name='followup',
            name='ticket',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.tickets', verbose_name='Ticket ID'),
        ),
        migrations.AlterField(
            model_name='student',
            name='health_service',
            field=models.CharField(choices=[('S.O.S', 'SOS'), ('Sura', 'Sura'), ('EMI', 'EMI'), ('Cosmitet', 'Cosmitet'), ('Sisben', 'Sisben')], default='S.O.S', max_length=50),
        ),
        migrations.AlterField(
            model_name='tickets',
            name='area',
            field=models.ForeignKey(default=4, on_delete=django.db.models.deletion.CASCADE, to='api.areas', verbose_name='Area'),
        ),
        migrations.AlterField(
            model_name='tickets',
            name='family_support',
            field=models.CharField(choices=[('Si', 'Si'), ('No', 'No')], default='Si', max_length=50),
        ),
        migrations.AlterField(
            model_name='tickets',
            name='frecuency_attendance',
            field=models.CharField(choices=[('Diariamente', 'Diariamente'), ('Semanalmente', 'Semanalmente'), ('Ocasionalmente', 'Ocasionalmente'), ('Nunca', 'Nunca')], default='Diariamente', max_length=50),
        ),
        migrations.AlterField(
            model_name='tickets',
            name='hours_worked',
            field=models.CharField(choices=[('0 a 12', '0 a 12'), ('13 a 24', '13 a 24'), ('25 a 36', '25 a 36'), ('37 a 48', '37 a 48')], default='0 a 12', max_length=100),
        ),
        migrations.AlterField(
            model_name='tickets',
            name='job_expectations',
            field=models.CharField(choices=[('Muy altas', 'Muy altas'), ('Altas', 'Altas'), ('Medias', 'Medias'), ('Bajas', 'Bajas'), ('Muy bajas', 'Muy bajas')], default='Muy altas', max_length=50),
        ),
        migrations.AlterField(
            model_name='tickets',
            name='missing_classes',
            field=models.CharField(choices=[('Si', 'Si'), ('No', 'No')], default='No', max_length=50),
        ),
        migrations.AlterField(
            model_name='tickets',
            name='related_activities_at_school',
            field=models.CharField(choices=[('Si', 'Si'), ('No', 'No')], default='Si', max_length=50),
        ),
        migrations.AlterField(
            model_name='tickets',
            name='stress_levels',
            field=models.PositiveIntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 8), (9, 9), (10, 10)], default=0),
        ),
        migrations.AlterField(
            model_name='tickets',
            name='stress_source',
            field=models.CharField(choices=[('Sobrecarga academica', 'Sobrecarga academica'), ('Falta de tiempo', 'Falta de tiempo'), ('Presentacion de un examen', 'Presentacion de un examen'), ('Exposicion de algun trabajo', 'Exposicion de algun trabajo'), ('Tareas', 'Tareas'), ('Intervencion en el aula', 'Intervencion en el aula'), ('Competitividad entre compañeros', 'Competitividad entre compañeros'), ('Trabajar en grupo', 'Trabajar en grupo'), ('Problemas familiares', 'Problemas familiares')], default='Sobrecarga academica', max_length=100),
        ),
        migrations.AlterField(
            model_name='tickets',
            name='study_group',
            field=models.CharField(choices=[('Si', 'Si'), ('No', 'No')], default='No', max_length=50),
        ),
        migrations.AlterField(
            model_name='tickets',
            name='support_service',
            field=models.CharField(choices=[('Si', 'Si'), ('No', 'No')], default='No', max_length=50),
        ),
    ]
