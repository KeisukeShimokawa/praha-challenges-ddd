import { Controller, Get } from '@nestjs/common';
import { GetAllTeamUseCase } from 'src/usecase/team/GetAllTeam.usecase';
import { GetAllTeamResponse } from './response/GetAllTeam.response';

@Controller('teams')
export class TeamController {
  constructor(private readonly getAllTeamUseCase: GetAllTeamUseCase) {}

  @Get('/')
  async getAllTeams(): Promise<GetAllTeamResponse> {
    const teams = await this.getAllTeamUseCase.execute();
    const response = new GetAllTeamResponse({ teams });
    return response;
  }
}
