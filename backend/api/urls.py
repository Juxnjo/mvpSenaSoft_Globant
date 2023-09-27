from django.urls import path
from .views import (StudentCreateAPIView, StudentListAPIView, StudentRetrieveAPIView, StudentDestroyAPIView, StudentUdateAPIView, TicketCreateAPIView, TicketListAPIView, TicketRetrieveAPIView, FollowUpCreateAPIView, FollowUpListAPIView, FollowUpRetrieveAPIView, FollowUpUdateAPIView, FollowUpDestroyAPIView, FeedbackListAPIView, FeedbackCreateAPIView, LoginView, RegistrationView, LogoutView)

urlpatterns = [

    # ********* Students **********
    
    path('students/', StudentListAPIView.as_view(), name= 'student_list'),

    path('students/new', StudentCreateAPIView.as_view(), name= 'student_create'),

    path('students/see/<int:pk>/', StudentRetrieveAPIView.as_view(), name= 'student_retrieve'),

    path('students/del/<int:pk>/', StudentDestroyAPIView.as_view(), name= 'student_delete'),

    path('students/upd/<int:pk>/', StudentUdateAPIView.as_view(), name= 'student_update'),


    # ********* Tickets ***********

    path('tickets/', TicketListAPIView.as_view(), name= 'ticket_list'),

    path('tickets/new', TicketCreateAPIView.as_view(), name= 'ticket_create'),

    path('tickets/see/<int:pk>/', TicketRetrieveAPIView.as_view(), name= 'ticket_retrieve'),

    # path('students/tickets/', StudentTicketListAPIView.as_view(), name= 'students_ticket_list'),

    # path('students/tickets/<int:pk>/', StudentRetrieveAPIView.as_view(), name= 'students_ticket_retrieve'),

    # ********* FollowUp *************

    path('followup/new', FollowUpCreateAPIView.as_view(), name= 'followup_create'),

    path('followup/', FollowUpListAPIView.as_view(), name= 'followup_list'),

    path('followup/see/<int:pk>/', FollowUpRetrieveAPIView.as_view(), name= 'followup_retrieve'),

    path('followup/upd/<int:pk>/', FollowUpUdateAPIView.as_view(), name= 'followup_update'),

    path('followup/del/<int:pk>/', FollowUpDestroyAPIView.as_view(), name= 'followup_delete'),

    #********** Feedback ************

    path('feedback/new', FeedbackCreateAPIView.as_view(), name= 'feedback_create'),

    path('feedback/', FeedbackListAPIView.as_view(), name= 'feedback_list'),


    # ******** Login ************

    path('login/', LoginView.as_view(), name= 'login'),

    # ******** Register ***********

    path('register/', RegistrationView.as_view(), name= 'register'),

    # ******** Logout ***********

    path('logout/', LogoutView.as_view(), name= 'register'),

]