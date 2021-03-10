from django.contrib import admin
from core.models import Aulas, Cursos, Docentes, Grupos, Horarios
admin.site.register(Horarios)
admin.site.register(Aulas)
admin.site.register(Cursos)
admin.site.register(Docentes)
admin.site.register(Grupos)

