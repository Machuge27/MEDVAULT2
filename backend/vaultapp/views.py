from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .serializer import UserSerializer,CustomTokenObtainPairSerializer,TestResultSerialzer,AnalysisResultSerializer
from .models import User,TestResult,AnalysisResult
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
class AnalysisResults(generics.ListCreateAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class=AnalysisResultSerializer
    queryset=AnalysisResult.objects.all()

    def post(self,request):
        data={ 'user':request.user.id,
             'testName': request.data['testName'],
             'value':request.data['value']
              }
        print(data)
        serializer=self.get_serializer(data=data)
        if serializer.is_valid():
            serializer.save()
            # perform analysis here
            return Response({'data': serializer.data},status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)