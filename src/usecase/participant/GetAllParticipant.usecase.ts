import { Inject, Injectable } from '@nestjs/common';
import {
  GetAllParticipantDTO,
  IGetAllParticipantQueryService,
} from './QueryServiceInterface/GetAllParticipant.queryServiceInterface';

@Injectable()
export class GetAllParticipantUseCase {
  public constructor(
    @Inject('IGetAllParticipantQueryService')
    private readonly getAllParticipantQueryService: IGetAllParticipantQueryService,
  ) {}

  public async execute(): Promise<GetAllParticipantDTO[]> {
    try {
      return await this.getAllParticipantQueryService.getAll();
    } catch (error) {
      throw error;
    }
  }
}
