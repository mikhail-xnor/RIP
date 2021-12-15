from django.shortcuts import render
from .models import *
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django import forms
from datetime import datetime


def index(request):
    return render(request, 'main/index.html')


def report(request):
    drivers = Driver.objects.all()
    params = {'drivers': drivers, 'date': datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
    return render(request, 'main/report.html', params)


def driver_list(request):
    drivers = Driver.objects.all().values()
    params = {'entity': 'Driver', 'objects': drivers}
    return render(request, 'main/list.html', params)


def park_list(request):
    parks = CarPark.objects.all().values()
    params = {'entity': 'CarPark', 'objects': parks}
    return render(request, 'main/list.html', params)


class CarParkCreate(CreateView):
    model = CarPark
    fields = ['name']
    success_url = '/carpark'
    template_name = 'main/park_form.html'


class CarParkUpdate(UpdateView):
    model = CarPark
    fields = ['name']
    pk_url_kwarg = 'id'
    success_url = '/carpark'
    template_name = 'main/park_form.html'


class CarParkDelete(DeleteView):
    model = CarPark
    pk_url_kwarg = 'id'
    success_url = '/carpark'
    template_name = 'main/park_delete_form.html'


class DriverCreate(CreateView):
    model = Driver
    fields = ['fio', 'sal', 'park_id']
    success_url = '/driver'
    template_name = 'main/driver_form.html'

    def get_context_data(self, **kwargs):
        context = super(DriverCreate, self).get_context_data(**kwargs)
        context['form'].fields['park_id'] = forms.ModelChoiceField(queryset=CarPark.objects.all(),
                                                                    empty_label=None, label='Автопарк')
        return context


class DriverUpdate(UpdateView):
    model = Driver
    fields = ['fio', 'sal', 'park_id']
    pk_url_kwarg = 'id'
    success_url = '/driver'
    template_name = 'main/driver_form.html'

    def get_context_data(self, **kwargs):
        context = super(DriverUpdate, self).get_context_data(**kwargs)
        context['form'].fields['park_id'] = forms.ModelChoiceField(queryset=CarPark.objects.all(),
                                                                   empty_label=None, label='Автопарк')
        return context


class DriverDelete(DeleteView):
    model = Driver
    pk_url_kwarg = 'id'
    success_url = '/driver'
    template_name = 'main/driver_delete_form.html'
