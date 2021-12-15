from django.db import models


class Cpu(models.Model):
    id = models.BigAutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=30)  # Field name made lowercase.
    frequency = models.CharField(db_column='Frequency', max_length=10, blank=True, null=True)  # Field name made lowercase.
    architecture = models.CharField(db_column='Architecture', max_length=20, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'CPU'


class Diskstorage(models.Model):
    id = models.BigAutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    type = models.CharField(db_column='Type', max_length=20)  # Field name made lowercase.
    rs = models.CharField(db_column='RS', max_length=20, blank=True, null=True)  # Field name made lowercase.
    ws = models.CharField(db_column='WS', max_length=20, blank=True, null=True)  # Field name made lowercase.
    volume = models.CharField(db_column='Volume', max_length=20)  # Field name made lowercase.

    class Meta:
        db_table = 'DiskStorage'


class Hardware(models.Model):
    id = models.BigAutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    cpu = models.ForeignKey(Cpu, models.DO_NOTHING, db_column='CPU_ID')  # Field name made lowercase.
    ram = models.ForeignKey('Ram', models.DO_NOTHING, db_column='RAM_ID')  # Field name made lowercase.
    diskstor = models.ForeignKey(Diskstorage, models.DO_NOTHING, db_column='DiskStor_ID')  # Field name made lowercase.

    class Meta:
        db_table = 'Hardware'


class Ram(models.Model):
    id = models.BigAutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=50, blank=True, null=True)  # Field name made lowercase.
    type = models.CharField(db_column='Type', max_length=20)  # Field name made lowercase.
    frequency = models.CharField(db_column='Frequency', max_length=20)  # Field name made lowercase.
    volume = models.SmallIntegerField(db_column='Volume', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'RAM'
