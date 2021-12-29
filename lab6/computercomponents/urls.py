from django.contrib import admin
from computercomponents import views as comp_views
from django.urls import include, path
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'cpu', comp_views.CpuViewSet)
router.register(r'disk', comp_views.DiskstorageViewSet)
router.register(r'ram', comp_views.RamViewSet)
router.register(r'hardware', comp_views.HardwareViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('', comp_views.index),
    path('<str:model_name>/', comp_views.list, name='list')
]