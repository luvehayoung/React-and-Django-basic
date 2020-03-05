# todos/urls.py
from django.urls import path

from . import views

urlpatterns = [
    # path('api', views.Index.as_view()),
    path('api/col', views.Default.as_view()),

    path('api/<str:pk>/<str:size>', views.Index.as_view()),
    path('api/save', views.Index.as_view()),
]