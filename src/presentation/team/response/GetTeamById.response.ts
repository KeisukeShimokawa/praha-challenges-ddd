import { GetAllTeamDTO } from 'src/usecase/team/QueryServiceInterface/GetAllTeam.queryServiceInterface';

export class GetTeamByIdResponse {
  public constructor(params: { team: GetAllTeamDTO }) {
    return new Team({
      id: params.team.id,
      name: params.team.name,
      pairs: params.team.pairs,
    });
  }
}

class Team {
  constructor(
    private readonly params: {
      id: string;
      name: string;
      pairs: { id: string }[];
    },
  ) {}
}
