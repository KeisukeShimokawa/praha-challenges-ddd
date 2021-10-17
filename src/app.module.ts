import { Module } from '@nestjs/common';
import { GetAllParticipantQueryService } from './infrastructure/db/participant/QueryService/GetAllParticipant.QueryService';
import { GetAllTaskQueryService } from './infrastructure/db/task/QueryService/GetAllTask.QueryService';
import { GetAllTeamQueryService } from './infrastructure/db/team/GetAllTeam.QueryService';
import { GetTeamByIdQueryService } from './infrastructure/db/team/GetTeamById.QueryService';
import { ParticipantController } from './presentation/participant/participant.controller';
import { TaskController } from './presentation/task/task.controller';
import { TeamController } from './presentation/team/team.controller';
import { PrismaService } from './shared/prisma/PrismaService';
import { GetAllParticipantUseCase } from './usecase/participant/GetAllParticipant.usecase';
import { GetAllTaskUseCase } from './usecase/task/GetAllTask.usecase';
import { GetAllTeamUseCase } from './usecase/team/GetAllTeam.usecase';
import { GetTeamByIdUseCase } from './usecase/team/GetTeamById.usecase';

@Module({
  imports: [],
  controllers: [ParticipantController, TaskController, TeamController],
  providers: [
    PrismaService,
    GetAllParticipantUseCase,
    GetAllParticipantQueryService,
    GetAllTaskUseCase,
    GetAllTaskQueryService,
    GetAllTeamUseCase,
    GetAllTeamQueryService,
    GetTeamByIdUseCase,
    GetTeamByIdQueryService,
    {
      provide: 'IGetAllParticipantQueryService',
      useClass: GetAllParticipantQueryService,
    },
    {
      provide: 'IGetAllTaskQueryService',
      useClass: GetAllTaskQueryService,
    },
    {
      provide: 'IGetAllTeamQueryService',
      useClass: GetAllTeamQueryService,
    },
    {
      provide: 'IGetTeamByIdQueryService',
      useClass: GetTeamByIdQueryService,
    },
  ],
})
export class AppModule {}
