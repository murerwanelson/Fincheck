from django.shortcuts import render, redirect
from .models import Company, Employee
from .form import EmployeeForm
import pandas as pd
from rest_framework import viewsets
from .models import Employee, Company
from .serializers import EmployeeSerializer, CompanySerializer


# Create your views here.
def add_employee(request):
    if request.method == "POST":
        form = EmployeeForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('employee_list')
    else:
        form = EmployeeForm()
    return render(request, 'add_employee.html', {'form': form})

def bulk_upload(request):
    if request.method == "POST":
        file = request.FILES['file']
        data = pd.read_csv(file)
        for index, row in data.iterrows():
            try:
                company = Company.objects.get(name=row['company'])
                employee = Employee(
                    company=company,
                    name=row['name'],
                    # Add other necessary fields here
                    employee_id=row.get('employee_id', None),
                    department=row.get('department', ''),
                    role=row.get('role', ''),
                    start_date=row.get('start_date', None),
                    end_date=row.get('end_date', None),
                    duties=row.get('duties', '')
                )
                employee.save()
            except Company.DoesNotExist:
                # Handle the case where the company does not exist
                continue
        
        return redirect('employee_list')
    return render(request, 'talent/bulk_uploads.html')

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
