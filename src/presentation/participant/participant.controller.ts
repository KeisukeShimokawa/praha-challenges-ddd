import { Controller, Get } from '@nestjs/common';
import { GetAllParticipantUseCase } from 'src/usecase/participant/GetAllParticipant.usecase';
import { GetAllParticipantResponse } from './response/GetAllParticipant.response';

@Controller('/participants')
export class ParticipantController {
  constructor(private getAllParticipantUseCase: GetAllParticipantUseCase) {}

  @Get()
  async getAllParticipant(): Promise<GetAllParticipantResponse> {
    const participants = await this.getAllParticipantUseCase.execute();
    const response = new GetAllParticipantResponse({ participants });
    return response;
  }
}
