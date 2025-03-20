# The serializers.py file is part of a Django REST Framework (DRF) implementation, which is used to convert complex data types (like Django models) into JSON (or other formats) and vice versa. Serializers transform Django model instances into native Python data types (like dictionaries or lists) that can then be converted into JSON for API responses.
from rest_framework import serializers
from .models import category, blog


class categorySerializer(serializers.ModelSerializer):
    class Meta: # Meta class provides metadata about the serializer.
        model = category # specifies category as the model
        fields = "__all__" # includes all fields of category


class blogSerializer(serializers.ModelSerializer):
    class Meta:
        model = blog
        fields = "__all__"
