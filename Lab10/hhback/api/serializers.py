from rest_framework import serializers

from api.models import Company


class CompanySerializer1(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id', 'name')