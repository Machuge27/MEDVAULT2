from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('api/token/', views.CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path("api/token/refresh/", jwt_views.TokenRefreshView.as_view(), name="token_refresh"),
    path("api/register/", views.CreateUser.as_view(), name="register"),
    path("api/post/results/",views.PostResults.as_view(),name="postResults")

]+ static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
