from django.urls import path
from . import views

urlpatterns = [
    path('', views.FirstPage, name=""),
    path('quantity', views.Quantity, name="quantity"),
    path('point', views.Point, name='point'),
    path('share', views.Share, name='share'),
    path('awesome', views.LastAwesome, name='awesome'),
    path('good', views.LastGood, name='good'),
    path('bad', views.LastBad, name='bad'),
    path('other', views.Other, name='other'),

]
