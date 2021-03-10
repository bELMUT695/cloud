from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User
from core.models import Cursos, Aulas, Horarios,Grupos,Docentes


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username',)


class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'username', 'password')



class AulasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aulas
        fields = ('id_aula', 'capacidad', 'estado')  


class CursosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cursos
        fields = ('id_curso', 'nombres', 'escuela')


class DocentesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Docentes
        fields=('id_docente','nombre','apellido')
        

class GruposSerializer(serializers.ModelSerializer):
    id_docente =DocentesSerializer(many=False, read_only=True)
    id_curso = CursosSerializer(many=False, read_only=True)
    class Meta:      
        model=Grupos
        fields=('id_grupo','numero','id_docente','id_curso')


class HorariosSerializer(serializers.ModelSerializer):
    id_grupo = GruposSerializer(many=False, read_only=True)
    id_aula = AulasSerializer(many=False, read_only=True)

    class Meta:
        model = Horarios
        fields = ('id_horario','dia','hora_inicia','hora_fin' ,'id_grupo','id_aula')