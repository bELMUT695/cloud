# Generated by Django 3.0.5 on 2021-03-15 19:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Aulas',
            fields=[
                ('id_aula', models.IntegerField(primary_key=True, serialize=False)),
                ('capacidad', models.IntegerField(blank=True, null=True)),
                ('estado', models.CharField(blank=True, max_length=45, null=True)),
            ],
            options={
                'db_table': 'aulas',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Cursos',
            fields=[
                ('id_curso', models.IntegerField(primary_key=True, serialize=False)),
                ('nombres', models.CharField(max_length=45)),
                ('escuela', models.CharField(max_length=45)),
            ],
            options={
                'db_table': 'cursos',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Docentes',
            fields=[
                ('id_docente', models.IntegerField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(blank=True, max_length=45)),
                ('apellido', models.CharField(blank=True, max_length=45)),
            ],
            options={
                'db_table': 'docentes',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Grupos',
            fields=[
                ('id_grupo', models.IntegerField(primary_key=True, serialize=False)),
                ('numero', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'grupos',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Horarios',
            fields=[
                ('id_horario', models.IntegerField(primary_key=True, serialize=False)),
                ('dia', models.CharField(blank=True, max_length=45, null=True)),
                ('hora_inicia', models.TimeField(blank=True, null=True)),
                ('hora_fin', models.TimeField(blank=True, null=True)),
            ],
            options={
                'db_table': 'horarios',
                'managed': False,
            },
        ),
    ]
