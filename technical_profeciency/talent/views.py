from django.shortcuts import render, redirect
from .models import Company, Employee
from .form import EmployeeForm  
import pandas as pd
from rest_framework import viewsets, status
from .serializers import EmployeeSerializer, CompanySerializer
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics
from django.views.generic import ListView

# Create your views here.
def add_employee(request):
    if request.method == "POST":
        form = EmployeeForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('employee_list')
    else:
        form = EmployeeForm()
    return render(request, 'talent/add_employee.html', {'form': form})  

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
                continue
        
        return redirect('employee_list')
    return render(request, 'talent/bulk_uploads.html')

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

    def create(self, request, *args, **kwargs):
        company_name = request.data.get('company')
        try:
            company = Company.objects.get(name=company_name)
        except Company.DoesNotExist:
            return Response({'error': 'Company not found.'}, status=status.HTTP_400_BAD_REQUEST)

        employee_data = request.data
        employee_data['company'] = company.id

        serializer = self.get_serializer(data=employee_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class EmployeeListView(generics.ListAPIView):  
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['name', 'company__name', 'role', 'department', 'start_date', 'end_date'] 

class EmployeeTemplateListView(ListView):
    model = Employee
    template_name = 'talent/employee_list.html'
    context_object_name = 'employees'
  