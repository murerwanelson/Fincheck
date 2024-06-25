from django.contrib import admin
# Register your models here.
from .models import Company, Department, Employee, Role, Duty



admin.site.register(Company)
admin.site.register(Department)
admin.site.register(Employee)
admin.site.register(Role)
admin.site.register(Duty)