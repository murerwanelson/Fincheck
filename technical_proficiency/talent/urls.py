from django.urls import path
from. import views

app_name='talent'

urlpatterns=[
    path('companies',views.company_list,name='companies'),
    path('company',views.company_update,name='company'),
    path('departments',views.department_list,name='departments'),
    path('department',views.department_update,name='department'),
    path('employees',views.employee_list,name='employees'),
    path('employee',views.employee_update,name='employee'),
    path('roles',views.role_list,name='roles'),
    path('role',views.role_update,name='role'),
    path('duty',views.duty_update,name='duty'),
    
    path('bulk_upload',views.bulk_upload,name='bulk_upload'),
]