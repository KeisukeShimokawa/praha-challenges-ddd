import { PrismaClient } from '.prisma/client';
import { Controller, Get } from '@nestjs/common';
import { GetAllParticipantQueryService } from 'src/infrastructure/db/participant/QueryService/GetAllParticipant.QueryService';
import { GetAllParticipantUseCase } from 'src/usecase/participant/GetAllParticipant.usecase';
import { GetAllParticipantResponse } from './response/GetAllParticipant.response';

@Controller('/participants')
export class ParticipantController {
  @Get()
  async getAllParticipant(): Promise<GetAllParticipantResponse> {
    const prisma = new PrismaClient();
    const queryService = new GetAllParticipantQueryService(prisma);
    const usecase = new GetAllParticipantUseCase(queryService);
    const participants = await usecase.execute();
    const response = new GetAllParticipantResponse({ participants });
    return response;
  }
}
