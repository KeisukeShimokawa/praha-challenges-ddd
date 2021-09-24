import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/PrismaService';
import {
  GetAllTaskDTO,
  IGetAllTaskQueryService,
} from 'src/usecase/task/QueryServiceInterface/GetAllTask.queryServiceInterface';

@Injectable()
export class GetAllTaskQueryService implements IGetAllTaskQueryService {
  constructor(private readonly prisma: PrismaService) {}

  public async getAll(): Promise<GetAllTaskDTO[]> {
    const allTaskORM = await this.prisma.task.findMany({
      include: {
        progresses: true,
      },
    });

    const allTaskDTO = [];
    allTaskORM.map((task) => {
      allTaskDTO.push(
        new GetAllTaskDTO({
          id: task.id,
          title: task.name,
          description: task.description,
          taskProgresses: task.progresses.map((progress) => {
            return {
              participantId: progress.participantId,
              progressStatus: progress.progressStatus,
            };
          }),
        }),
      );
    });

    return allTaskDTO;
  }
}
