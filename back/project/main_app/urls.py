# todos/urls.py
from django.urls import path

from . import views

urlpatterns = [
    path('', views.Index.as_view()),
    # path('<int:pk>/', views.DetailTodo.as_view()),
]