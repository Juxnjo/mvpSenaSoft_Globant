from rest_framework import serializers
from .models import Student, Areas, Tickets, FollowUp, Feedback

#Serializadores de los diferentes modelos
#Transcribe la informacion que contiene en modelo y la pasa a un formato JSON que puede ser consumido en la web facilmente
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'


class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Areas
        fields = '__all__'


class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tickets
        fields = '__all__'

    def to_representation(self, instance):
        return {
            'id': instance.id,
            'average': instance.average,
            'frecuency_attendance': instance.frecuency_attendance,
            'missing_classes': instance.missing_classes,
            'related_activities_at_school': instance.related_activities_at_school,
            'study_group': instance.study_group,
            'support_service': instance.support_service,
            'hours_worked': instance.hours_worked,
            'family_support': instance.family_support,
            'stress_levels': instance.stress_levels,
            'stress_source': instance.stress_source,
            'job_expectations': instance.job_expectations,
            'comments': instance.comments,
            'phase': instance.phase,
            'student_id': instance.student.id,
            'student_name': instance.student.first_name,
            'student_last_name': instance.student.last_name,
            'area': instance.area.name,
        }


class FollowUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = FollowUp
        fields = '__all__'


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'