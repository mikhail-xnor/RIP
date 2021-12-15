from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('carpark', views.park_list),
    path('carpark/create', views.CarParkCreate.as_view()),
    path('carpark/<int:id>/update', views.CarParkUpdate.as_view(), name='park_update'),
    path('carpark/<int:id>/delete', views.CarParkDelete.as_view(), name='park_delete'),
    path('driver', views.driver_list),
    path('driver/create', views.DriverCreate.as_view()),
    path('driver/<int:id>/update', views.DriverUpdate.as_view(), name='driver_update'),
    path('driver/<int:id>/delete', views.DriverDelete.as_view(), name='driver_delete'),
    path('report', views.report)
]