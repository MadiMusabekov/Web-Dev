from django.db import models

# Create your models here.
"""
create table product(
    id INTEGER,
    name VARCHAR(255),
    price numeric default 1000
);
"""

#ORM - Object Relational Mapping

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField(default=1000)
    description = models.TextField(default='Basic text')
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active
        }

class Category(models.Model):
    name = models.CharField(max_length=255)
    # test = models.BooleanField(default=True)
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

