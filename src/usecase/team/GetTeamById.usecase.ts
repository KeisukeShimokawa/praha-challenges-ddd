import { Inject, Injectable } from '@nestjs/common';
import {
  GetTeamByIdDTO,
  IGetTeamByIdQueryService,
} from './QueryServiceInterface/GetTeamById.queryService';

@Injectable()
export class GetTeamByIdUseCase {
  public constructor(
    @Inject('IGetTeamByIdQueryService')
    private readonly getTeamByIdQueryService: IGetTeamByIdQueryService,
  ) {}

  public async execute(id: string): Promise<GetTeamByIdDTO> {
    try {
      return await this.getTeamByIdQueryService.getTeamById(id);
    } catch (error) {
      throw error;
    }
  }
}
