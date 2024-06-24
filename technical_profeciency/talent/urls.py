from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from . import views
from django.urls import path
from .views import EmployeeListView
from .views import add_employee, bulk_upload, EmployeeViewSet, CompanyViewSet, EmployeeTemplateListView


router = DefaultRouter()
router.register(r'employees', views.EmployeeViewSet)
router.register(r'companies', views.CompanyViewSet)

urlpatterns = [
    path('bulk-upload/', views.bulk_upload, name='bulk_upload'),
    path('api/', include(router.urls)),
    path('api/employees/', EmployeeListView.as_view(), name='employee-list'),
    path('add_employee/', add_employee, name='add_employee'),
    path('bulk_upload/', bulk_upload, name='bulk_upload'),
    path('employee_list/', EmployeeTemplateListView.as_view(), name='employee_list'),
    # Add other URL patterns here
]
