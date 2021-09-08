import { PrismaClient } from '.prisma/client';
import {
  GetAllParticipantDTO,
  IGetAllParticipantQueryService,
} from 'src/usecase/participant/QueryServiceInterface/GetAllParticipant.queryServiceInterface';

export class GetAllParticipantQueryService
  implements IGetAllParticipantQueryService
{
  private prismaClient: PrismaClient;

  public constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient;
  }

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
          tasks: participant.progresses.map((task) => task.taskId),
          pair: participant.pairId,
        }),
      );
    });

    return allParticipantDTO;
  }
}
