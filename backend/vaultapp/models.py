from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid
from django.utils import timezone


# Create your models here.


class User(AbstractUser):
    
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    uuid=models.CharField(max_length=8,unique=True,blank=True)
    
    def save(self, *args, **kwargs):
        if not self.uuid:
            # Generate a random unique code (you can modify this to fit your needs)
            self.uuid = str(uuid.uuid4())[:8].upper()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.username


class TestResult(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    testName = models.CharField(max_length=200)
    status=models.TextField()
    attachment=models.FileField(upload_to='document/')
    testResults=models.CharField(max_length=1000)
    created=models.DateTimeField(default=timezone.now())
    updated=models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.test_name