from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=255)
    registration_date = models.DateField()
    registration_number = models.CharField(max_length=255)
    address = models.TextField()
    contact_person = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    
    def __str__(self):
        return self.name

class Department(models.Model):
    name = models.CharField(max_length=255)
    company = models.ForeignKey(Company, related_name='departments', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Role(models.Model):
    title = models.CharField(max_length=255)
    department = models.ForeignKey(Department, related_name='roles', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class Employee(models.Model):
    company = models.ForeignKey(Company, related_name='employees', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    employee_id = models.CharField(max_length=50, blank=True, null=True)
    department = models.ForeignKey(Department, related_name='employees', on_delete=models.SET_NULL, null=True)
    role = models.ForeignKey(Role, related_name='employees', on_delete=models.SET_NULL, null=True)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    duties = models.TextField()

    def __str__(self):
        return self.name

class EmploymentHistory(models.Model):
    employee = models.ForeignKey(Employee, related_name='employment_history', on_delete=models.CASCADE)
    role = models.ForeignKey(Role, related_name='employment_history', on_delete=models.CASCADE)
    department = models.ForeignKey(Department, related_name='employment_history', on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return f'{self.employee.name} - {self.role.title} ({self.start_date} to {self.end_date or "Present"})'

