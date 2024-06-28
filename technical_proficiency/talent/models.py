from django.db import models
from django.utils import timezone
from encrypted_model_fields.fields import EncryptedEmailField, EncryptedCharField
# Create your models here.

class Company(models.Model):
    name=models.CharField(max_length=100)
    date_of_reg=models.DateField(default=timezone.now())
    reg_num=models.CharField(max_length=100)
    address=models.CharField(max_length=100) 
    email = EncryptedEmailField(max_length=100) 

    #number of employees, 
    @property
    def employees(self)->int:
        count=0
        return count
    
    #contact person
    @property
    def contact_person(self)->list:
        contacts=[]
        return contacts
    
    #contact phone
    @property
    def contact_phone(self)->list:
        contacts=[]
        return contacts
    
    #list of departments
    @property
    def departments(self)->list:
        return self.department_set.all()

    def __str__(self):
        return self.name

class Department(models.Model):
    company=models.ForeignKey(Company,on_delete=models.CASCADE)
    name=models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Employee(models.Model):
    department=models.ForeignKey(Department, on_delete=models.CASCADE)
    name=models.CharField(max_length=100)
    id_num = EncryptedCharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.name
    
    
class Role(models.Model):
    employee = models.ForeignKey(Employee,on_delete=models.CASCADE)
    name=models.CharField(max_length=100)
    date_started=models.DateField(default=timezone.now())
    date_left=models.DateField(null=True, blank=True)
    def __str__(self):
        return self.name

class Duty(models.Model):
    role=models.ForeignKey(Role, on_delete=models.CASCADE)
    name=models.CharField(max_length=100)
    description=models.CharField(max_length=200)

    def __str__(self):
        return self.name
    

