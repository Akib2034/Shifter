from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import Shift
from .serializers import ShiftSerializer
from accounts.permissions import IsClient, IsWorker


class ShiftViewSet(viewsets.ModelViewSet):
    queryset = Shift.objects.all()
    serializer_class = ShiftSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Shift.objects.all()

    def perform_create(self, serializer):
        serializer.save(client=self.request.user)

    # 👇 custom endpoint: /api/shifts/{id}/accept/
    @action(detail=True, methods=['post'], permission_classes=[IsWorker])
    def accept(self, request, pk=None):
        shift = self.get_object()

        if shift.worker:
            return Response(
                {"error": "Shift already assigned"},
                status=status.HTTP_400_BAD_REQUEST
            )

        shift.worker = request.user
        shift.status = "assigned"
        shift.save()

        return Response({"message": "Shift accepted successfully"})