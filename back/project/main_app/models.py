from django.db import models

# Create your models here.
class Basic(models.Model):
    
    data = models.CharField(max_length=200)
    value = models.IntegerField(default = 0)
    value1 = models.CharField(max_length=10, blank=True, null=True)
    value2 = models.CharField(max_length=10, blank=True, null=True)
    value3 = models.CharField(max_length=10, blank=True, null=True)
    
    def __str__(self):
        """A string representation of the model."""
        return self.data