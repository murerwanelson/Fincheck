from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Company, Department, Employee, Role, Duty
from .table import getCompanies, getDepartments, getEmployees, getRoles
from django.http import JsonResponse
from django.core.files.storage import default_storage
from .serializers import CompanySerializer

import pandas as pd

@api_view(['GET', 'POST'])
def company_list(request):
    companies=getCompanies(Company)
    print(companies)
    return JsonResponse(companies)

@api_view(['GET', 'POST',])
def company_update(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def department_list(request):
    return JsonResponse(getDepartments(Department))

@api_view(['GET', 'POST'])
def department_update(request):
    ...

@api_view(['GET', 'POST'])
def employee_list(request):
    return JsonResponse(getEmployees(Employee))

@api_view(['GET', 'POST'])
def employee_update(request):
    ...

@api_view(['GET', 'POST'])
def role_list(request):
    return JsonResponse(getRoles(Role))

@api_view(['GET', 'POST'])
def role_update(request):
    ...

@api_view(['GET', 'POST'])
def duty_update(request):
    ...

@api_view(['POST'])
def bulk_upload(request):
    csv_file = request.FILES.get('csv_file')
    file_path = f'uploads/{csv_file.name}'
    default_storage.save(file_path, csv_file)
    df = pd.read_csv(default_storage.path(file_path))
    print(df.head())
    return JsonResponse({'success': True})