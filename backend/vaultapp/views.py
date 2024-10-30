from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .serializer import UserSerializer,CustomTokenObtainPairSerializer,TestResultSerialzer
from .models import User,TestResult
from rest_framework_simplejwt.views import TokenObtainPairView


# Create your views here.

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class CreateUser(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def post(self, request):
        data = self.get_serializer(data=request.data)
        if data.is_valid():
            new_data = data.validated_data
            user = User.objects.create_user(**new_data)
            refresh = RefreshToken.for_user(user)
            print(user)
            data = {
                "username": user.username,
                "email": user.email,
                "refresh": str(refresh),
                "access": str(refresh.access_token),
                "uuid": user.uuid,
            }
            print(data)
            return Response({"data": data}, status=status.HTTP_201_CREATED)
        return Response(data.errors, status=status.HTTP_400_BAD_REQUEST)

class PostResults(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = TestResultSerialzer
    queryset=TestResult.objects.all()

    def post(self,request):
        data1=request.data
        data={
            'user':request.user.id,
            'testName':data1['testName'],
            'status':data1['status'],
            'attachment':data1['attachments'],
            'testResults':data1['testResults']
        }
        print(data)
        serializer=self.get_serializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
