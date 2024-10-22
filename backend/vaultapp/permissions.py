from django.contrib.auth.models import Group


doctor_group, created = Group.objects.get_or_create(name='doctor')
patient_group, created = Group.objects.get_or_create(name='patient')

# Assign pwermissions to groups:

doctor_group.permissions.set([
    'add_patient',
    'view_patient',
])

patient_group.permissions.set([
    'view_patient',
])  

