import { Inject, Injectable } from '@nestjs/common';
import {
  GetAllTeamDTO,
  IGetAllTeamQueryService,
} from './QueryServiceInterface/GetAllTeam.queryServiceInterface';

@Injectable()
export class GetAllTeamUseCase {
  public constructor(
    @Inject('IGetAllTeamQueryService')
    private readonly getAllTeamQueryService: IGetAllTeamQueryService,
  ) {}

  public async execute(): Promise<GetAllTeamDTO[]> {
    try {
      return await this.getAllTeamQueryService.getAll();
    } catch (error) {
      throw error;
    }
  }
}
