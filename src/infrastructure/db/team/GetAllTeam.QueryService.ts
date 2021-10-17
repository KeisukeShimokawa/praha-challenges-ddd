import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/PrismaService';
import {
  GetAllTeamDTO,
  IGetAllTeamQueryService,
} from 'src/usecase/team/QueryServiceInterface/GetAllTeam.queryServiceInterface';

@Injectable()
export class GetAllTeamQueryService implements IGetAllTeamQueryService {
  constructor(private readonly prisma: PrismaService) {}

  public async getAll(): Promise<GetAllTeamDTO[]> {
    const allTeamORM = await this.prisma.team.findMany({
      include: {
        pairs: true,
      },
    });

    const allTeamDTO = [];
    allTeamORM.map((team) => {
      allTeamDTO.push(
        new GetAllTeamDTO({
          id: team.id,
          name: team.name,
          pairs: team.pairs.map((pair) => {
            return {
              id: pair.pairId,
            };
          }),
        }),
      );
    });

    return allTeamDTO;
  }
}
