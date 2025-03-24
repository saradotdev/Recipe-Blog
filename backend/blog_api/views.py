from django.shortcuts import render
from .models import blog, category
from .serializers import blogSerializer, categorySerializer
from rest_framework import mixins, viewsets  # DRF classes for building API views
from rest_framework.response import Response  # Used for returning JSON responses


# These classes create API endpoints.
# They inherits from:
# viewsets.GenericViewSet → A flexible base class for API views.
# mixins.ListModelMixin → Allows GET requests to list all blog posts. (/blogs/)
# mixins.RetrieveModelMixin → Allows GET requests to fetch a single blog post using a slug. (/blogs/some-slug/)
class blogApiView(  # For retrieving blogs
    viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin
):
    queryset = blog.objects.all()  # Gets all blog entries from the database.
    serializer_class = blogSerializer  # Specifies the serializer class to use.
    lookup_field = "slug"  # Specifies the field to use for fetching a single blog post.


class categoryApiView(  # For retrieving categories
    viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin
):
    queryset = category.objects.all()
    serializer_class = categorySerializer
    lookup_field = "id"  # (/categories/1/)


# API view to get all blog posts related to a specific category. It inherits from viewsets.ViewSet, which means it doesn't provide default methods (like list, create, etc.), but we manually define retrieve. (/categories/1/posts/)
class categoryPostApiView(viewsets.ViewSet):
    def retrieve(self, request, pk=None):  # (Primary Key) in the URL
        queryset = blog.objects.filter(
            category=pk
        )  # Fetches all blogs where category matches the given ID (pk)
        serializer = blogSerializer(
            queryset, many=True
        )  # many=True because we're returning multiple blog posts (serialize multiple objects)
        return Response(
            serializer.data
        )  # Returns the serialized data as a JSON response
