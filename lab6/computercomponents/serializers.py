from .models import *
from rest_framework import serializers


class CpuSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Cpu
        # Поля, которые мы сериализуем
        fields = ["id", "name", "frequency", "architecture"]

class DiskstorageSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Diskstorage
        # Поля, которые мы сериализуем
        fields = ["id", "type", "rs", "ws", "volume"]

class RamSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Ram
        # Поля, которые мы сериализуем
        fields = ["id", "name", "type", "frequency", "volume"]

class HardwareSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Hardware
        # Поля, которые мы сериализуем
        fields = ["id", "cpu", "ram", "diskstor"]