from django.urls import path, include
from django.conf.urls import url
from .views import current_user, UserList
from rest_framework_jwt.views import obtain_jwt_token
from . import views
from rest_framework.routers import DefaultRouter


urlpatterns = [
      path('current_user/', current_user),
    path('users/', UserList.as_view()),
    url(r'^curso$', views.CursosList.as_view()),
    url(r'^curso/(?P<pk>[0-9]+)$', views.CursosDetail.as_view()),
    url(r'^horario$', views.HorariosList.as_view()),
    url(r'^horario/(?P<pk>[0-9]+)$', views.HorariosDetail.as_view()),
    url(r'^aula$', views.AulasList.as_view()),
    url(r'^aula/(?P<pk>[0-9]+)$', views.AulasDetail.as_view()),
    url(r'^docente$', views.DocentesList.as_view()),
    url(r'^docente/(?P<pk>[0-9]+)$', views.DocentesDetail.as_view()),
    url(r'^grupo$', views.GruposList.as_view()),
    url(r'^grupo/(?P<pk>[0-9]+)$', views.GruposDetail.as_view()),
]
