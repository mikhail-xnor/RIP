from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('<str:model_name>/', views.list, name='list')
]