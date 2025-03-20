from django.shortcuts import render
from .models import blog, category
from .serializers import blogSerializer, categorySerializer
from rest_framework import mixins, viewsets
from rest_framework.response import Response


class blogApiView(
    viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin
):
    queryset = blog.objects.all()
    serializer_class = blogSerializer
    lookup_field = "slug"


class categoryApiView(
    viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin
):
    queryset = category.objects.all()
    serializer_class = categorySerializer
    lookup_field = "id"


class categoryPostApiView(viewsets.ViewSet):
    def retrieve(self, request, pk=None):
        queryset = blog.objects.filter(category=pk)
        serializer = blogSerializer(queryset, many=True)
        return Response(serializer.data)
