import { Controller, Get, Param } from '@nestjs/common';
import { GetAllTeamUseCase } from 'src/usecase/team/GetAllTeam.usecase';
import { GetTeamByIdUseCase } from 'src/usecase/team/GetTeamById.usecase';
import { GetAllTeamResponse } from './response/GetAllTeam.response';
import { GetTeamByIdResponse } from './response/GetTeamById.response';

@Controller('teams')
export class TeamController {
  constructor(
    private readonly getAllTeamUseCase: GetAllTeamUseCase,
    private readonly getTeamByIdUseCase: GetTeamByIdUseCase,
  ) {}

  @Get('/')
  async getAllTeams(): Promise<GetAllTeamResponse> {
    const teams = await this.getAllTeamUseCase.execute();
    const response = new GetAllTeamResponse({ teams });
    return response;
  }

  @Get('/:id')
  async getTeamById(@Param('id') id: string): Promise<GetTeamByIdResponse> {
    const team = await this.getTeamByIdUseCase.execute(id);
    const response = new GetTeamByIdResponse({ team });
    return response;
  }
}
