from computercomponents.models import Cpu
from rest_framework import serializers


class CompSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Cpu
        # Поля, которые мы сериализуем
        fields = ["id", "name", "frequency", "architecture"]