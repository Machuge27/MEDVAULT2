from rest_framework import serializers
from .models import User,TestResult,AnalysisResult
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import authenticate


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "email", "password",'uuid']
        extra_kwargs = {"password": {"write_only": True}}

class TestResultSerialzer(serializers.ModelSerializer):
    class Meta:
        model=TestResult
        fields='__all__'
        
        
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    uuid=serializers.CharField(required=False)
    def validate(self, attrs):
        request=self.context.get('request')
        requires_uuid=request.GET.get('requires_uuid','').lower()=='true'
        username = attrs.get('username')
        password = attrs.get('password')
        uuid=attrs.get('uuid')
        print(password,username)

        if requires_uuid:
            if not uuid:
                raise serializers.ValidationError({
                'uuid': 'UUID is required for this type of authentication'

                })
            
            user=authenticate(
                request=request,
                username=username,
                password=password
            )
            if user:
                # Check if UUID matches (assuming user model has uuid field)
                if str(user.uuid) != uuid:
                    raise serializers.ValidationError({
                        'detail': 'Invalid UUID provided'
                    })
            else:
                raise serializers.ValidationError({
                'detail': 'Invalid credentials'
                })
        else:
            # Normal authentication without UUID
            user = authenticate(
                request=request,
                username=username,
                password=password
            )

            if not user:
                raise serializers.ValidationError({
                    'message':'Invalid Credentials'
                })
            
            if not user.is_active:
                raise serializers.ValidationError({
                    'detail':'User account is disabled'
                })
            
            self.user=user

            data=super().validate(attrs)

            data['user_id']=self.user.id
            data['uuid']=self.user.uuid
            data['email']=self.user.email
            data['username']=self.user.username

            return data

class AnalysisResultSerializer(serializers.ModelSerializer):
    class Meta:
        model=AnalysisResult
        fields='__all__'
