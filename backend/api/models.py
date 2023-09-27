from django.db import models

#Phase list of options

CREADO = 'Creado'
PROCESO = 'En Proceso'
CONCLUIDO = 'Concluido'

PHASE_CHOICES = (
    (CREADO ,'Creado'),
    (PROCESO, 'En proceso'),
    (CONCLUIDO , 'Concluido'),
    )

class Student(models.Model):

    #********* Lists to add to the choices option **********

    CASA_PROPIA = 'Casa Propia'
    CASA_RENTA = 'Casa en renta'

    HOUSE_CHOICES = (
        (CASA_PROPIA, 'Casa Propia'),
        (CASA_RENTA, 'Casa en renta')
    )


    SOS = 'S.O.S'
    SURA = 'Sura'
    EMI = 'EMI'
    COSMITET = 'Cosmitet'
    SISBEN = 'Sisben'

    EPS_CHOICES = (
        (SOS, 'SOS'),
        (SURA, 'Sura'),
        (EMI, 'EMI'),
        (COSMITET, 'Cosmitet'),
        (SISBEN, 'Sisben'),
    )

    BASICA = 'Basica'
    MEDIA = 'Media'
    SUPERIOR = 'Superior'

    EDUCATION_CHOICES = (
        (BASICA ,'Basica'),
        (MEDIA, 'Media'),
        (SUPERIOR , 'Superior'),
    )

    EMPLEADO = 'Empleado'
    DESEMPLEADO = 'Desempleado'
    COMERCIANTE = 'Comerciante'

    WORK_CHOICES = (
        (EMPLEADO ,'Empleado'),
        (DESEMPLEADO, 'Desempleado'),
        (COMERCIANTE , 'Comerciante'),
    )

    ESTRATO_UNO = 1
    ESTRATO_DOS = 2
    ESTRATO_TRES = 3
    ESTRATO_CUATRO = 4
    ESTRATO_CINCO = 5
    ESTRATO_SEIS = 6

    SOCIAL_SCALE = (
        (ESTRATO_UNO , 1),
        (ESTRATO_DOS, 2),
        (ESTRATO_TRES , 3),
        (ESTRATO_CUATRO , 4),
        (ESTRATO_CINCO, 5),
        (ESTRATO_SEIS , 6)
    )

    #*************** Declaration of the attrs of the model


    id = models.PositiveIntegerField(primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    birth_date = models.DateField()
    phone_number = models.PositiveIntegerField()
    housing_type = models.CharField(max_length=50, choices=HOUSE_CHOICES, default=CASA_PROPIA)
    health_service = models.CharField(max_length=50, choices=EPS_CHOICES, default=SOS)
    family_education_level = models.CharField(max_length=50, choices=EDUCATION_CHOICES, default=BASICA)
    work_situation = models.CharField(max_length=50, choices=WORK_CHOICES, default=EMPLEADO)
    social_scale = models.PositiveIntegerField(choices=SOCIAL_SCALE, default=ESTRATO_TRES)
    password = models.CharField(default='User123', max_length=20)
    is_active = models.BooleanField(default=True)


    class Meta:
        verbose_name = 'Student'
        verbose_name_plural = 'Students'

    def __str__(self):
        return self.first_name + self.last_name
    
class Areas(models.Model):
    
    name = models.CharField(max_length=50)
    description = models.TextField(null=True, blank=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'Area'
        verbose_name_plural = 'Areas'

    def __str__(self):
        return self.name

    

#********** Model Tickets
    

class Tickets(models.Model):

    #Adding a list of choices

    DIARIA = 'Diariamente'
    SEMANAL = 'Semanalmente'
    OCASIONAL = 'Ocasionalmente'
    NUNCA = 'Nunca'

    FRECUENCY_CHOICES = (
        (DIARIA ,'Diariamente'),
        (SEMANAL, 'Semanalmente'),
        (OCASIONAL , 'Ocasionalmente'),
        (NUNCA , 'Nunca')
    )

    #List of options from 0 to 10

    ZERO = 0
    ONE = 1
    TWO = 2
    THREE = 3
    FOUR = 4
    FIVE = 5
    SIX = 6
    SEVEN = 7
    EIGHT = 8
    NINE = 9
    TEN = 10

    AVERAGE_CHOICES = (
        (ZERO , 0),
        (ONE , 1),
        (TWO , 2),
        (THREE , 3),
        (FOUR , 4),
        (FIVE , 5),
        (SIX , 6),
        (SEVEN , 7),
        (EIGHT , 8),
        (NINE , 9),
        (TEN , 10)
    )

    #Option list for missing classes

    SI = 'Si'
    NO = 'No'

    YESNO_CHOICES = (
        (SI , 'Si'),
        (NO , 'No'),
    )

    #Option list for stress source

    SOBRECARGA = 'Sobrecarga academica'
    TIEMPO = 'Falta de tiempo'
    EXAMEN = 'Presentacion de un examen'
    EXPOSICION = 'Exposicion de algun trabajo'
    TAREAS = 'Tareas'
    INTERVENCION = 'Intervencion en el aula'
    COMPETITIVIDAD = 'Competitividad entre compañeros'
    TRABAJO_GRUPO = 'Trabajar en grupo'
    FAMILIA = 'Problemas familiares'

    STRESS_SOURCE_CHOICES = (
        (SOBRECARGA , 'Sobrecarga academica'),
        (TIEMPO , 'Falta de tiempo'),
        (EXAMEN , 'Presentacion de un examen'),
        (EXPOSICION , 'Exposicion de algun trabajo'),
        (TAREAS , 'Tareas'),
        (INTERVENCION , 'Intervencion en el aula'),
        (COMPETITIVIDAD , 'Competitividad entre compañeros'),
        (TRABAJO_GRUPO , 'Trabajar en grupo'),
        (FAMILIA , 'Problemas familiares'),
    )

    # Choices list for job expectations

    MUY_ALTAS = 'Muy altas'
    ALTAS = 'Altas'
    MEDIAS = 'Medias'
    BAJAS = 'Bajas'
    MUY_BAJAS = 'Muy bajas'

    JOB_EXPECTATIONS_CHOICES = (
        (MUY_ALTAS , 'Muy altas'),
        (ALTAS , 'Altas'),
        (MEDIAS , 'Medias'),
        (BAJAS , 'Bajas'),
        (MUY_BAJAS , 'Muy bajas')
    )

    #Choices list for hours worked weekly

    RANGO_1 = '0 a 12'
    RANGO_2 = '13 a 24'
    RANGO_3 = '25 a 36'
    RANGO_4 = '37 a 48'

    HOURS_WORKED_CHOICES = (
        (RANGO_1 , '0 a 12'),
        (RANGO_2 , '13 a 24'),
        (RANGO_3 , '25 a 36'),
        (RANGO_4 , '37 a 48')
    )


    student = models.ForeignKey(Student, verbose_name='Estudiante', on_delete=models.CASCADE)
    average = models.PositiveIntegerField(choices=AVERAGE_CHOICES, default=ZERO)
    frecuency_attendance = models.CharField(max_length=50, choices=FRECUENCY_CHOICES, default=DIARIA)
    missing_classes = models.CharField(max_length=50, choices=YESNO_CHOICES, default=NO)
    related_activities_at_school = models.CharField(max_length=50, choices=YESNO_CHOICES, default=SI)
    study_group = models.CharField(max_length=50, choices=YESNO_CHOICES, default=NO)
    support_service = models.CharField(max_length=50, choices=YESNO_CHOICES, default=NO)
    hours_worked = models.CharField(max_length=100, choices=HOURS_WORKED_CHOICES, default=RANGO_1)
    family_support = models.CharField(max_length=50, choices=YESNO_CHOICES, default=SI)
    stress_levels = models.PositiveIntegerField(choices=AVERAGE_CHOICES, default=ZERO)
    stress_source = models.CharField(max_length=100, choices=STRESS_SOURCE_CHOICES, default=SOBRECARGA)
    job_expectations = models.CharField(max_length=50, choices=JOB_EXPECTATIONS_CHOICES, default=MUY_ALTAS)
    comments = models.TextField(null=True, blank= True)
    area = models.ForeignKey(Areas, verbose_name='Area', on_delete=models.CASCADE, default=4)
    phase = models.CharField(choices=PHASE_CHOICES, default=CREADO, max_length=100)
    is_active = models.BooleanField(default=True)

    def setArea(self):

        #Direccion academica:
        # #Condicionales para determinar el area correspondiente segun el formulario
        if self.frecuency_attendance == 'Ocasional' or self.frecuency_attendance == 'Nunca' and self.related_activities_at_school == 'No' and self.study_group == 'No' and self.stress_source == 'Sobrecarga academica' or self.stress_source == 'Falta de tiempo' or self.stress_source == 'Tareas' or self.stress_source == 'Intervencion en el aula' and self.average <= 6:

            #Enviando la instancia de Areas para obtener y enviar el id correspondiente
            try: 
                instance = Areas.objects.get(id=3)
                self.area = instance

            except Areas.DoesNotExist:
                return("El Area no existe")

        #Area financiera
        if self.average <= 8 and self.frecuency_attendance == "Ocasional" or self.frecuency_attendance == "Nunca" and self.related_activities_at_school == "No" and self.study_group == "Si" and self.support_service == "No" and self.hours_worked == "0 a 12" or self.hours_worked == "13 a 24" and self.stress_levels >= 6 and self.stress_source == "Falta de tiempo" :
            #Enviando la instancia de Areas para obtener y enviar el id correspondiente
            try: 
                instance = Areas.objects.get(id=1)
                self.area = instance

            except Areas.DoesNotExist:
                return("El Area no existe")

        #Area psicologica
        if self.average <= 7 and self.frecuency_attendance == "Semanalmente" or self.frecuency_attendance == "Ocasionalmente" or self.frecuency_attendance == "Nunca" and self.missing_classes == "Si" and self.related_activities_at_school == "No" and self.study_group == "No" and self.support_service == "Si" and self.family_support == "No" and self.stress_levels >= 6 and self.stress_source == "Sobrecarga academica" or self.stress_source == "Problemas familiares" and self.job_expectations == "Bajas" or self.job_expectations == "Muy bajas":
            #Enviando la instancia de Areas para obtener y enviar el id correspondiente
            try: 
                instance = Areas.objects.get(id=2)
                self.area = instance

            except Areas.DoesNotExist:
                return("El Area no existe")
        
        else:
            try:
                instance = Areas.objects.get(id=4)
                self.area = instance
            except Areas.DoesNotExist:
                return("El Area no existe")
            

    def save(self, *args, **kwargs):
        self.setArea()  # Establecer el area antes de guardar
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = 'Ticket'
        verbose_name_plural = 'Tickets'

    def __str__(self):
        return str(self.id)
    


class FollowUp(models.Model):

    phase = models.CharField(choices=PHASE_CHOICES, default=PROCESO, max_length=100)
    comments = models.TextField(null=True, blank=True)
    ticket = models.ForeignKey(Tickets, verbose_name='Ticket ID', on_delete=models.CASCADE)
    evidence = models.TextField()
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'FollowUp'
        verbose_name_plural = 'FollowUps'

    def __str__(self):
        return str(self.id)
    

class Feedback(models.Model):

    #List of options from 0 to 5

    ZERO = 0
    ONE = 1
    TWO = 2
    THREE = 3
    FOUR = 4
    FIVE = 5

    QUALIFICATION_CHOICES = (
        (ZERO , 0),
        (ONE , 1),
        (TWO , 2),
        (THREE , 3),
        (FOUR , 4),
        (FIVE , 5)
    )

    phase = models.CharField(choices=PHASE_CHOICES, default=CONCLUIDO, max_length=100)
    comments = models.TextField()
    followUp = models.ForeignKey(FollowUp, verbose_name='Follow Up', on_delete=models.CASCADE)
    qualification = models.PositiveIntegerField(choices=QUALIFICATION_CHOICES, default=FIVE)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'Feedback'
        verbose_name_plural = 'Feedbacks'

    def __str__(self):
        return str(self.id)