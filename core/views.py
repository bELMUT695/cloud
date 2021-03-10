from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, UserSerializerWithToken
from .serializers import UserSerializer, UserSerializerWithToken
from drf_multiple_model.views import ObjectMultipleModelAPIView
from core.models import Cursos, Aulas, Horarios,Grupos,Docentes
from core.serializers import AulasSerializer,CursosSerializer,DocentesSerializer,GruposSerializer,HorariosSerializer
from rest_framework import generics



@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """

    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AulasList(generics.ListCreateAPIView):
    queryset = Aulas.objects.all()
    serializer_class =AulasSerializer


class AulasDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Aulas.objects.all()
    serializer_class = AulasSerializer
    

class CursosList(generics.ListCreateAPIView):
    queryset = Cursos.objects.all()
    serializer_class = CursosSerializer


class CursosDetail(generics.RetrieveUpdateAPIView):
    queryset = Cursos.objects.all()
    serializer_class = CursosSerializer


class DocentesList(generics.ListCreateAPIView):
    queryset = Docentes.objects.all()
    serializer_class = DocentesSerializer

class DocentesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Docentes.objects.all()
    serializer_class =DocentesSerializer


class GruposList(generics.ListCreateAPIView):
    queryset = Grupos.objects.all()
    serializer_class = GruposSerializer

class GruposDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset =Grupos.objects.all()
    serializer_class =GruposSerializer  


class HorariosList(generics.ListCreateAPIView):
    queryset = Horarios.objects.all()
    serializer_class = HorariosSerializer


class HorariosDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Horarios.objects.all()
    serializer_class = HorariosSerializer

