import { Module } from '@nestjs/common';
import { GetAllParticipantQueryService } from './infrastructure/db/participant/QueryService/GetAllParticipant.QueryService';
import { GetAllTaskQueryService } from './infrastructure/db/task/QueryService/GetAllTask.QueryService';
import { ParticipantController } from './presentation/participant/participant.controller';
import { TaskController } from './presentation/task/task.controller';
import { PrismaService } from './shared/prisma/PrismaService';
import { GetAllParticipantUseCase } from './usecase/participant/GetAllParticipant.usecase';
import { GetAllTaskUseCase } from './usecase/task/GetAllTask.usecase';

@Module({
  imports: [],
  controllers: [ParticipantController, TaskController],
  providers: [
    PrismaService,
    GetAllParticipantUseCase,
    GetAllParticipantQueryService,
    GetAllTaskUseCase,
    GetAllTaskQueryService,
    {
      provide: 'IGetAllParticipantQueryService',
      useClass: GetAllParticipantQueryService,
    },
    {
      provide: 'IGetAllTaskQueryService',
      useClass: GetAllTaskQueryService,
    },
  ],
})
export class AppModule {}
