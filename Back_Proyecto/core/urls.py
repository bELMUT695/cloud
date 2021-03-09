from django.urls import path
from django.conf.urls import url
from .views import current_user, UserList
from rest_framework_jwt.views import obtain_jwt_token
from . import views  
urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    url(r'^curso$', views.CursoList.as_view()),
    url(r'^curso/(?P<pk>[0-9]+)$', views.CursoDetail.as_view()),
    url(r'^horario$', views.HorarioList.as_view()),
    url(r'^horario/(?P<pk>[0-9]+)$', views.HorarioDetail.as_view()),
    url(r'^aula$', views.AulaList.as_view()),
    url(r'^aula/(?P<pk>[0-9]+)$', views.AulaDetail.as_view()),
   
    
    
]
