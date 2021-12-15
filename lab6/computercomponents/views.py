from django.shortcuts import render
from .models import *
from django.apps import apps

from rest_framework import viewsets
from computercomponents.serializers import CompSerializer
from computercomponents.models import Cpu

def index(request):
    models = apps.get_app_config('computercomponents').get_models()
    models_names = [model._meta.db_table for model in models]
    models_dict = {model_id: models_name for model_id, models_name in zip(range(len(models_names)), models_names)}
    params = {'models_dict': models_dict}
    return render(request, 'computercomponents/index.html', params)


def list(request, model_name):
    models = apps.get_app_config('computercomponents').get_models()
    model = ''
    for elem in models:
        if elem._meta.db_table == model_name:
            model = elem
    params = {'model_name': model._meta.db_table, 'objects': model.objects.values()}
    return render(request, 'computercomponents/list.html', params)


class ComputeCompViewSet(viewsets.ModelViewSet):
    models = apps.get_app_config('computercomponents').get_models()
    model = ''
    for elem in models:
        if elem._meta.db_table == 'CPU':
            model = elem
    queryset = model.objects.all()
    serializer_class = CompSerializer
