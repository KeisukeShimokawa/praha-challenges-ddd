import { Module } from '@nestjs/common';
import { GetAllParticipantQueryService } from './infrastructure/db/participant/QueryService/GetAllParticipant.QueryService';
import { ParticipantController } from './presentation/participant/participant.controller';
import { PrismaService } from './shared/prisma/PrismaService';
import { GetAllParticipantUseCase } from './usecase/participant/GetAllParticipant.usecase';

@Module({
  imports: [],
  controllers: [ParticipantController],
  providers: [
    PrismaService,
    GetAllParticipantUseCase,
    GetAllParticipantQueryService,
    {
      provide: 'IGetAllParticipantQueryService',
      useClass: GetAllParticipantQueryService,
    },
  ],
})
export class AppModule {}
