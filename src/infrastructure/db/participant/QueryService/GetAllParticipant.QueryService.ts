import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/PrismaService';
import {
  GetAllParticipantDTO,
  IGetAllParticipantQueryService,
} from 'src/usecase/participant/QueryServiceInterface/GetAllParticipant.queryServiceInterface';

@Injectable()
export class GetAllParticipantQueryService
  implements IGetAllParticipantQueryService
{
  constructor(private prismaClient: PrismaService) {}

  public async getAll(): Promise<GetAllParticipantDTO[]> {
    const allParticipantORM = await this.prismaClient.participant.findMany({
      include: {
        pair: true,
        progresses: true,
      },
    });

    const allParticipantDTO = [];
    allParticipantORM.map((participant) => {
      allParticipantDTO.push(
        new GetAllParticipantDTO({
          id: participant.id,
          name: participant.name,
          email: participant.email,
          enrollmentStatus: participant.enrollmentStatus,
          tasks: participant.progresses.map((task) => task.taskId),
          pair: participant.pairId,
        }),
      );
    });

    return allParticipantDTO;
  }
}
