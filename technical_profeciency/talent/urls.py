from . import views
from django.urls import path

urlpatterns = [
    path('bulk-upload/', views.bulk_upload, name='bulk_upload'),
    # Add other URL patterns here
]
