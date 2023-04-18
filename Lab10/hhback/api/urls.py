from django.urls import path, re_path
from api import views

from api.views import company_list

urlpatterns = [
    path('companies/', company_list.as_view()),
    path('companies/<int:company_id>/', views.get_company),
    path('companies/<int:company_id>/vacancies', views.vacancy_list_by_company),
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:vacancy_id>/', views.get_vacancy),
    path('vacancies/top_ten', views.top_ten)
]