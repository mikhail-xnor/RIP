from django.urls import path
from . import views

urlpatterns = [
    path('', views.master, name="index"),
    path('<int:mem_id>/', views.detail, name="about")
]
