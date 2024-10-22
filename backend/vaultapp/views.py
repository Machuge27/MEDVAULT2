from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .serializer import UserSerializer
from .models import User

# Create your views here.


class CreateUser(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def post(self, request):
        data = self.get_serializer(data=request.data)
        refresh = RefreshToken.for_user(user)
        if data.is_valid():
            new_data = data.validated_data
            user = User.objects.create_user(**new_data)
            data = {
                "username": user.username,
                "email": user.email,
                "refresh": str(refresh),
                "access": str(refresh.access_token),
            }
            return Response({"data": data}, status=status.HTTP_201_CREATED)
        return Response(data.errors, status=status.HTTP_400_BAD_REQUEST)
