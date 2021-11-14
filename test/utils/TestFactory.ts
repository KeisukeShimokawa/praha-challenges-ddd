import { EnrollmentStatusType } from 'src/domain/participant/vo/ParticipantEnrollmentStatus';
import { PrismaService } from 'src/shared/prisma/PrismaService';

const client = new PrismaService();

const creator = async () => {
  await client.participant.createMany({
    data: [
      {
        id: '1',
        name: '1',
        email: '1',
        enrollmentStatus: EnrollmentStatusType.ENROLLMENT,
      },
    ],
  });
};
