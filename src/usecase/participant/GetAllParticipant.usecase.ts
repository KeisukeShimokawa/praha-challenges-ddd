import { Injectable } from '@nestjs/common';
import { GetAllParticipantQueryService } from 'src/infrastructure/db/participant/QueryService/GetAllParticipant.QueryService';
import { GetAllParticipantDTO } from './QueryServiceInterface/GetAllParticipant.queryServiceInterface';

@Injectable()
export class GetAllParticipantUseCase {
  public constructor(
    private readonly getAllParticipantQueryService: GetAllParticipantQueryService,
  ) {}

  public async execute(): Promise<GetAllParticipantDTO[]> {
    try {
      return await this.getAllParticipantQueryService.getAll();
    } catch (error) {
      throw error;
    }
  }
}
