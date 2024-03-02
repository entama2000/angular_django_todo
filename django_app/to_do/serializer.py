from rest_framework import serializers

from .models import Todo

class TodoSerializer(serializers.ModelSerializer):
    class Mata:
        model = Todo
        fields = ('id', 'title', 'created_at')