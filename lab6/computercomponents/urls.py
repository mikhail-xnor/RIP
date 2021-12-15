from django.contrib import admin
from computercomponents import views as comp_views
from django.urls import include, path
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'computercomp', comp_views.ComputeCompViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('', comp_views.index),
    path('<str:model_name>/', comp_views.list, name='list')
]