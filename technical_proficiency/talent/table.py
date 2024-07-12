def getEmployees(Employee):
    employees=[
        {'id':employee.id_num,'department':employee.department,'name':employee.name,'role':employee.role}
        for employee in Employee.objects.all()
    ]
    return {'table':employees}

def getDepartments(Department):
    departments=[department.name for department in Department.objects.all()]
    return {'list':departments}

def getCompanies(Company):
    companies=[company.name for company in Company.objects.all()]
    return {'list':companies}

def getRoles(Role):
    roles=[role.name for role in Role.objects.all()]
    return {'list':roles}

