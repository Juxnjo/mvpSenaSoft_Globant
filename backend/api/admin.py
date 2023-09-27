from django.contrib import admin
from .models import Student, Areas, Tickets, FollowUp, Feedback

class StudentAdmin(admin.ModelAdmin):
    list_display= ('id', 'first_name', 'last_name', 'email')

class AreasAdmin(admin.ModelAdmin):
    list_display= ('id', 'name')

class TicketAdmin(admin.ModelAdmin):
    list_display= ('id', 'student', 'area')

class FollowUpAdmin(admin.ModelAdmin):
    list_display= ('id', 'phase', 'ticket')

class FeedbackAdmin(admin.ModelAdmin):
    list_display= ('id', 'phase', 'followUp')

admin.site.register(Student, StudentAdmin)
admin.site.register(Areas, AreasAdmin)
admin.site.register(Tickets, TicketAdmin)
admin.site.register(FollowUp, FollowUpAdmin)
admin.site.register(Feedback, FeedbackAdmin)