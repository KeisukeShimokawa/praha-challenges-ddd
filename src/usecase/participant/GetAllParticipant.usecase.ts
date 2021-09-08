import {
  GetAllParticipantDTO,
  IGetAllParticipantQueryService,
} from './QueryServiceInterface/GetAllParticipant.queryServiceInterface';

export class GetAllParticipantUseCase {
  public constructor(
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
