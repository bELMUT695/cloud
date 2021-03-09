from django.db import models


class Aula(models.Model):
    id_aula = models.IntegerField(primary_key=True)
    capacidad = models.IntegerField()
    estado = models.CharField(db_column='Estado', max_length=45)

    class Meta:
        managed = False
        db_table = 'aula'


class Curso(models.Model):
    id_curso = models.IntegerField(primary_key=True)
    # Field name made lowercase.
    nombre = models.CharField(db_column='Nombre', max_length=45)
    dia = models.CharField(max_length=45)
    hora_inicio = models.TimeField()
    hora_fin = models.TimeField()
    escuela = models.CharField(db_column='Escuela', max_length=45)

    class Meta:
        managed = False
        db_table = 'curso'


class Docente(models.Model):
    codigo = models.IntegerField(primary_key=True)
    # Field name made lowercase.
    nombres = models.CharField(db_column='Nombres', max_length=45)
    # Field name made lowercase.
    apellidos = models.CharField(db_column='Apellidos', max_length=45)
    # Field name made lowercase.
    telefono = models.IntegerField(db_column='Telefono')
    # Field name made lowercase.
    direccion = models.CharField(db_column='Direccion', max_length=45)

    class Meta:
        managed = False
        db_table = 'docente'


class Grupo(models.Model):
    id_grupo = models.IntegerField(primary_key=True)
    docente = models.ForeignKey(
        Docente, null=True, on_delete=models.SET_NULL, blank=True)
    curso = models.ForeignKey(
        Curso, null=True, on_delete=models.SET_NULL, blank=True)

    class Meta:
        managed = False
        db_table = 'grupo'


class Horario(models.Model):
    id_horario = models.IntegerField(primary_key=True)
    aula = models.ForeignKey(
        Aula, null=True, on_delete=models.SET_NULL, blank=True)
    curso = models.ForeignKey(
        Curso, null=True, on_delete=models.SET_NULL, blank=True)

    class Meta:
        managed = False
        db_table = 'horario'


class Horario2(models.Model):
    id_horario = models.IntegerField(primary_key=True)

    hora_inicio = models.DateField()
    hora_fin = models.DateField()
