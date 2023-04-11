from django.shortcuts import render

# Create your views here.
import json
from django.shortcuts import Http404
from django.http.response import JsonResponse
from api.models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def company_list(request):
    # select * from api_companies;
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [c.to_json() for c in companies]
        return JsonResponse(companies_json, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        company_name = data.get('name', '')
        company = Company.objects.create(name=company_name)
        return JsonResponse(company.to_json())

@csrf_exempt
def get_company(request, company_id):
    # select * from api_companies  where id = <company_id>;
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(company.to_json())
    if request.method == 'PUT':
        data = json.loads(request.body)
        new_company_name = data.get('name', company.name)
        company.name = new_company_name
        company.save()
        return JsonResponse(company.to_json())
    if request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted':True})


def vacancy_list_by_company(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancy_list = [c.to_json() for c in vacancies]
        data = [c for c in vacancy_list if c.company == company]
        return JsonResponse(data)

    if request.method == 'PUT':
        data = json.loads(request.body)
        new_company_name = data.get('name', company.name)
        company.name = new_company_name
        company.save()
        return JsonResponse(company.to_json())
    if request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted':True})

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [c.to_json() for c in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def get_vacancy(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())

    if request.method == 'PUT':
        data = json.loads(request.body)
        new_vacancy_name = data.get('name', vacancy.name)
        vacancy.name = new_vacancy_name
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    if request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'deleted':True})


def top_ten(request):
    # Retrieve all vacancies from the database and sort them by salary in descending order
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]

    # Create a list of dictionaries to represent each vacancy as a JSON object
    vacancy_list = []
    for vacancy in vacancies:
        vacancy_dict = {
            'id': vacancy.id,
            'title': vacancy.name,
            'description': vacancy.description,
            'salary': vacancy.salary
        }
        vacancy_list.append(vacancy_dict)

    # Return a JSON response with the sorted list of vacancies
    return JsonResponse(vacancy_list, safe=False)