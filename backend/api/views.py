from rest_framework import status, generics, permissions
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication

from .serializers import StudentSerializer, TicketSerializer, FollowUpSerializer, FeedbackSerializer, RegistrationSerializer, StudentRegistrationSerializer
from .models import Student, Tickets, FollowUp, Feedback

#Vista general para listar
class GeneralListAPIView(generics.ListAPIView):
    serializer_class = None

    def get_queryset(self):
        model = self.get_serializer().Meta.model
        return model.objects.filter(is_active= True)

#Crear Estudiante
class StudentCreateAPIView(generics.CreateAPIView):
    serializer_class = StudentSerializer
    permission_classes = [permissions.IsAuthenticated]

    #Personalizando la respuesta
    def post(self, request):
        serializer = self.serializer_class(data= request.data)
        if serializer.is_valid():

            student = serializer.save()

            #Agregar un estudiante a la tabla de usuarios
            email = serializer.validated_data.get('email')
            password = serializer.validated_data.get('password')


            user = User.objects.create_user(username=email, password=password)

            #Guardar usuario y estudiante
            user.save()
            student.save()

            return Response({'message': 'Estudiante creado correctamente'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#Listar Estudiantes
class StudentListAPIView(GeneralListAPIView):
    queryset = Student.objects.filter(is_active = True)
    serializer_class = StudentSerializer
    permission_classes = [permissions.IsAuthenticated]


#Listar por ID
class StudentRetrieveAPIView(generics.RetrieveAPIView):
    serializer_class = StudentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.get_serializer().Meta.model.objects.filter(is_active= True)
    

#Eliminar Logicamente
class StudentDestroyAPIView(generics.DestroyAPIView):
    serializer_class = StudentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.get_serializer().Meta.model.objects.filter(is_active= True)
    
    def delete(self, request, pk= None):
        student = self.get_queryset().filter(id= pk).first()
        if student:
            student.is_active  = False
            student.save()
            return Response({'message': 'Estudiante eliminado correctamente'}, status=status.HTTP_200_OK)
        return Response({'error': 'No existe un estudiante con estos datos'}, status= status.HTTP_400_BAD_REQUEST)
    

#Actualizar
class StudentUdateAPIView(generics.UpdateAPIView):
    serializer_class = StudentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self, pk= None):
        return self.get_serializer().Meta.model.objects.filter(is_active= True).filter(id= pk).first()
    
    def patch(self, request, pk = None):
        if self.get_queryset(pk):
            student_serializer = self.serializer_class(self.get_queryset(pk))
            return Response({'message': 'Estudiante actualizado correctamente'}, status= status.HTTP_200_OK)
        
        return Response({'error': 'No existe un estudiante con estos datos'}, status= status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk = None):
        if self.get_queryset(pk):
            student_serializer = self.serializer_class(self.get_queryset(pk), data= request.data)
            if student_serializer.is_valid():
                student_serializer.save()
                return Response({'message': 'Estudiante actualizado correctamente'}, status= status.HTTP_200_OK)
            return Response(student_serializer.errors, status= status.HTTP_400_BAD_REQUEST)
        return Response({'error': 'No existe un estudiante con estos datos'}, status= status.HTTP_400_BAD_REQUEST)
    

#************** Tickets ************

#Crear Ticket
class TicketCreateAPIView(generics.CreateAPIView):
    serializer_class = TicketSerializer
    permission_classes = [permissions.IsAuthenticated]

    #Personalizando la respuesta
    def post(self, request):
        serializer = self.serializer_class(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Ticket creado correctamente'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#Listar Tickets
class TicketListAPIView(GeneralListAPIView):
    queryset = Tickets.objects.filter(is_active = True)
    serializer_class = TicketSerializer
    permission_classes = [permissions.IsAuthenticated]


#Listar por ID de Ticket
class TicketRetrieveAPIView(generics.RetrieveAPIView):
    serializer_class = TicketSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.get_serializer().Meta.model.objects.filter(is_active= True)
    
# #Listar por ID de usuario que realiza la peticion
# class StudentTicketListAPIView(GeneralListAPIView):
#     serializer_class = TicketSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         # Obtenemos el usuario autenticado desde el objeto request
#         user = self.request.user

#         # Filtramos los tickets por el ID del estudiante al que pertenece cada ticket
#         queryset = Tickets.objects.filter(student=user.username)

#         return queryset

# #Listar por ID de Ticket para estudiantes
# class StudentTicketRetrieveAPIView(generics.RetrieveAPIView):
#     serializer_class = TicketSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):

#         user = self.request.user

#         queryset = Tickets.objects.filter(student=user.username)

#         return queryset


#  ************** FollowUps ************
#Crear FollowUp
class FollowUpCreateAPIView(generics.CreateAPIView):
    serializer_class = FollowUpSerializer
    permission_classes = [permissions.IsAuthenticated]

    #Personalizando la respuesta
    def post(self, request):
        serializer = self.serializer_class(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'FollowUp creado correctamente'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

#Listar FollowUps
class FollowUpListAPIView(GeneralListAPIView):
    queryset = FollowUp.objects.filter(is_active = True)
    serializer_class = FollowUpSerializer
    permission_classes = [permissions.IsAuthenticated]


#Listar por ID
class FollowUpRetrieveAPIView(generics.RetrieveAPIView):
    serializer_class = FollowUpSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.get_serializer().Meta.model.objects.filter(is_active= True)
    

#Actualizar
class FollowUpUdateAPIView(generics.UpdateAPIView):
    serializer_class = FollowUpSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self, pk= None):
        return self.get_serializer().Meta.model.objects.filter(is_active= True).filter(id= pk).first()
    
    def patch(self, request, pk = None):
        if self.get_queryset(pk):
            followup_serializer = self.serializer_class(self.get_queryset(pk))
            return Response({'message': 'FollowUp actualizado correctamente'}, status= status.HTTP_200_OK)
        
        return Response({'error': 'No existe un followUp con estos datos'}, status= status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk = None):
        if self.get_queryset(pk):
            student_serializer = self.serializer_class(self.get_queryset(pk), data= request.data)
            if student_serializer.is_valid():
                student_serializer.save()
                return Response({'message': 'FollowUp actualizado correctamente'}, status= status.HTTP_200_OK)
            return Response(student_serializer.errors, status= status.HTTP_400_BAD_REQUEST)
        return Response({'error': 'No existe un followUp con estos datos'}, status= status.HTTP_400_BAD_REQUEST)
    

#Eliminar Logicamente
class FollowUpDestroyAPIView(generics.DestroyAPIView):
    serializer_class = FollowUpSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.get_serializer().Meta.model.objects.filter(is_active= True)
    
    def delete(self, request, pk= None):
        followUp = self.get_queryset().filter(id= pk).first()
        if followUp:
            followUp.is_active  = False
            followUp.save()
            return Response({'message': 'FollowUp eliminado correctamente'}, status=status.HTTP_200_OK)
        return Response({'error': 'No existe un followUp con estos datos'}, status= status.HTTP_400_BAD_REQUEST)
    

#******** Feedbacks **********

#Listar Feedbacks
class FeedbackListAPIView(GeneralListAPIView):
    queryset = Feedback.objects.filter(is_active = True)
    serializer_class = FeedbackSerializer
    permission_classes = [permissions.IsAuthenticated]


#Crear Feedback
class FeedbackCreateAPIView(generics.CreateAPIView):
    serializer_class = FeedbackSerializer
    permission_classes = [permissions.IsAuthenticated]

    #Personalizando la respuesta
    def post(self, request):
        serializer = self.serializer_class(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Feedback creado correctamente'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


#Autenticacion

#Login (ChatGPT)
class LoginView(APIView):

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)
        
        
#Register
class RegistrationView(APIView):

    serializer_class = StudentRegistrationSerializer

    #Personalizando la respuesta
    def post(self, request):
        serializer = self.serializer_class(data= request.data)
        if serializer.is_valid():

            student = serializer.save()

            #Agregar un estudiante a la tabla de usuarios
            email = serializer.validated_data.get('email')
            password = serializer.validated_data.get('password')


            user = User.objects.create_user(username=email, password=password)

            #Guardar usuario y estudiante
            user.save()
            student.save()

            return Response({'message': 'Usuario creado correctamente'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#Logout (ChatGPT)
class LogoutView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        # Elimina el token del usuario autenticado
        request.auth.delete()
        return Response({'message': 'Cierre de sesión exitoso'}, status=status.HTTP_200_OK)