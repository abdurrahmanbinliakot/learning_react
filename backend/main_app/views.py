from django.shortcuts import render

from rest_framework.response import Response 
from rest_framework.decorators import api_view

from .serializers import PostSerializer


from .models import Post
# Create your views here.

@api_view(["GET","POST"])
def Index(request):
    # if request.method == "POST":
    #     name =request.data['name']
    #     age =request.data['age']
    #     email =request.data['email']
    #     return Response({"name":name,"age":age,"email":email})
    if request.method == "GET":
        post_data = Post.objects.all()
        serializer=PostSerializer(post_data, many=True)
       

        return Response(serializer.data)
        
        # return Response({
        #     # 'status':True,
        #     # 'message':'Post data faching',
        #     'data': serializer.data
        # })
