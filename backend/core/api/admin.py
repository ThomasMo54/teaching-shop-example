from django.contrib import admin

from .models import Product, Carrier

admin.site.register(Product)

admin.site.register(Carrier)
class CarrierAdmin(admin.ModelAdmin):
    list_display = ('name', 'delay_days')
