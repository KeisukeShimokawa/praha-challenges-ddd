import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/PrismaService';
import {
  GetTeamByIdDTO,
  IGetTeamByIdQueryService,
} from 'src/usecase/team/QueryServiceInterface/GetTeamById.queryService';

@Injectable()
export class GetTeamByIdQueryService implements IGetTeamByIdQueryService {
  constructor(private readonly prisma: PrismaService) {}

  public async getTeamById(id: string): Promise<GetTeamByIdDTO> {
    const teamORM = await this.prisma.team.findUnique({
      where: {
        id: id,
      },
      include: {
        pairs: true,
      },
    });

    return new GetTeamByIdDTO({
      id: teamORM.id,
      name: teamORM.name,
      pairs: teamORM.pairs.map((pair) => {
        return { id: pair.pairId };
      }),
    });
  }
}
