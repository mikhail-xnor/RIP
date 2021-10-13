from django.shortcuts import render
from .models import Memory


def master(request):
    memory = Memory.objects.order_by('id')
    return render(request, 'main/master.html', {'title': 'Типы памяти', 'memory': memory})


def detail(request, mem_id):
    mem = Memory.objects.get(id=mem_id)
    return render(request, 'main/detail.html', {'memory': mem})
