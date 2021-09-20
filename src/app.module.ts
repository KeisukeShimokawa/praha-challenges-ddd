import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetAllParticipantQueryService } from './infrastructure/db/participant/QueryService/GetAllParticipant.QueryService';
import { ParticipantController } from './presentation/participant/participant.controller';
import { PrismaService } from './shared/prisma/PrismaService';
import { GetAllParticipantUseCase } from './usecase/participant/GetAllParticipant.usecase';

@Module({
  imports: [],
  controllers: [AppController, ParticipantController],
  providers: [
    AppService,
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
