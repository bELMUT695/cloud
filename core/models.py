from django.db import models


class Aulas(models.Model):
    id_aula = models.IntegerField(primary_key=True)
    capacidad = models.IntegerField(blank=True, null=True)
    estado = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'aulas'


class Cursos(models.Model):
    id_curso = models.IntegerField(primary_key=True)
    nombres = models.CharField(max_length=45)
    escuela = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'cursos'


class Docentes(models.Model):
    id_docente = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=45,blank=True)
    apellido = models.CharField(max_length=45,blank=True)
    #telefono = models.CharField(max_length=45,blank=True)
    #direccion = models.CharField(max_length=45,blank=True)

    class Meta:
        managed = False
        db_table = 'docentes'


class Grupos(models.Model):
    id_grupo = models.IntegerField(primary_key=True)
    numero = models.IntegerField(blank=True, null=True)
    id_docente = models.ForeignKey(Docentes, models.DO_NOTHING, db_column='id_docente')
    id_curso = models.ForeignKey(Cursos, models.DO_NOTHING, db_column='id_curso')

    class Meta:
        managed = False
        db_table = 'grupos'


class Horarios(models.Model):
    id_horario = models.IntegerField(primary_key=True)
    dia = models.CharField(max_length=45, blank=True, null=True)
    hora_inicia = models.TimeField(blank=True, null=True)
    hora_fin = models.TimeField(blank=True, null=True)
    id_grupo = models.ForeignKey(Grupos, models.DO_NOTHING, db_column='id_grupo')
    id_aula = models.ForeignKey(Aulas, models.DO_NOTHING, db_column='id_aula')
    class Meta:
        managed = False
        db_table = 'horarios'