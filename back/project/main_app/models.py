from django.db import models

# Create your models here.
class Basic(models.Model):
    data =  models.CharField(max_length=200)

    def __str__(self):
        """A string representation of the model."""
        return self.data