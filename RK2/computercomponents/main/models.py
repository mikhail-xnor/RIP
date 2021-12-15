from django.db import models


class Driver(models.Model):
    """Водитель"""
    id = models.BigAutoField(db_column='ID', primary_key=True)
    fio = models.CharField(db_column='Fio', max_length=150, blank=True)
    sal = models.IntegerField(db_column='Salary', blank=True, null=True)
    park_id = models.ForeignKey('CarPark', models.DO_NOTHING, db_column='Park_ID')

    class Meta:
        db_table = 'Driver'

    def __str__(self):
        return f'{self.fio}'


class CarPark(models.Model):
    """Автопарк"""
    id = models.BigAutoField(db_column='ID', primary_key=True)
    name = models.CharField(db_column='Name', max_length=100, blank=True)

    class Meta:
        db_table = 'CarPark'

    def __str__(self):
        return f'{self.name}'


class DriverPark(models.Model):
    """Водители автопарка"""
    id = models.BigAutoField(db_column='ID', primary_key=True)
    park_id = models.ForeignKey('CarPark', models.DO_NOTHING, db_column='Park_ID')
    driver_id = models.ForeignKey('Driver', models.DO_NOTHING, db_column='Driver_ID')

    class Meta:
        db_table = 'DriverPark'
