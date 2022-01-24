from django.urls import path
from analisis.directorio.views import Comunas, TotalView, DependenciaView

urlpatterns = [
    path('comunas/', Comunas.as_view()),
    path('total/', TotalView.as_view()),
    path('dependencia/', DependenciaView.as_view()),

]
