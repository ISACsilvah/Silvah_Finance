from django.db import models

# Create your models here.

from django.db import models

class Usuarios(models.Model):
    nome = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    numero = models.CharField()



def _str_(self):
    return f"{self.nome} - {self.email}"
    