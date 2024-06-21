from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from . import views
from django.urls import path


router = DefaultRouter()
router.register(r'employees', views.EmployeeViewSet)
router.register(r'companies', views.CompanyViewSet)

urlpatterns = [
    path('bulk-upload/', views.bulk_upload, name='bulk_upload'),
    path('api/', include(router.urls)),
    # Add other URL patterns here
]

