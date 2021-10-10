import { Team } from './entity/Team';

export interface ITeamRepository {
  save(team: Team);
}
