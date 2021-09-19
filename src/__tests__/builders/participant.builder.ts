import { Prisma } from '.prisma/client';
import { PrismaService } from 'src/shared/prisma/PrismaService';
import * as faker from 'faker';
import { EnrollmentStatusType } from 'src/domain/participant/vo/EnrollmentStatus';

export const ParticipantBuilder = async (
  client: PrismaService,
  overrides?: Prisma.ParticipantCreateInput,
) => {
  const defaultParticipant: Prisma.ParticipantCreateInput = {
    id: faker.datatype.uuid(),
    name: faker.internet.userName(),
    email: faker.internet.email(),
    enrollmentStatus: EnrollmentStatusType.ENROLLMENT,
    progresses: {},
    pair: {},
  };

  const createParticipant = {
    ...defaultParticipant,
    ...overrides,
  };

  return await client.participant.create({
    data: createParticipant,
    include: {
      pair: true,
      progresses: true,
    },
  });
};
