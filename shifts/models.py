from django.db import models
from django.conf import settings


class Shift(models.Model):
    STATUS_CHOICES = (
        ('open', 'Open'),
        ('assigned', 'Assigned'),
        ('completed', 'Completed'),
    )

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)

    client = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='created_shifts',
    )

    worker = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='assigned_shifts',
    )

    address = models.CharField(max_length=255)
    date = models.DateTimeField()
    duration_hours = models.FloatField()
    hourly_rate = models.DecimalField(max_digits=10, decimal_places=2)

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='open',
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def total_pay(self):
        return self.duration_hours * float(self.hourly_rate)

    def __str__(self):
        return f"{self.title} - {self.address}"