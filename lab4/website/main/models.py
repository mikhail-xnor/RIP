from django.db import models


class Memory(models.Model):
    title = models.CharField('Memory type', max_length=50)
    info = models.TextField('Memory description')

    def __str__(self):
        return self.title


    class Meta:
        verbose_name = "Memory"
        verbose_name_plural = "Memory"