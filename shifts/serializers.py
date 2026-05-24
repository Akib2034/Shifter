from rest_framework import serializers
from .models import Shift


class ShiftSerializer(serializers.ModelSerializer):
    total_pay = serializers.ReadOnlyField()

    class Meta:
        model = Shift
        fields = '__all__'
        read_only_fields = ['client', 'worker', 'status']