import { GetAllTeamDTO } from 'src/usecase/team/QueryServiceInterface/GetAllTeam.queryServiceInterface';

export class GetAllTeamResponse {
  allTeams: Team[];

  public constructor(params: { teams: GetAllTeamDTO[] }) {
    const { teams } = params;
    this.allTeams = teams.map((team) => {
      return new Team({
        id: team.id,
        name: team.name,
        pairs: team.pairs,
      });
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
