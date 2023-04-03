from django.urls import path, re_path
from django.http.response import HttpResponse
from api import views
urlpatterns = [
    path('products/', views.product_list),
    path('categories/', views.category_list),
    path('products/<int:product_id>/', views.get_product_by_id),
    path('categories/<int:category_id>/', views.get_category_by_id),
    path('categories/<int:category_id>/products/', views.product_list_by_category)
]