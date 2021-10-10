import { Entity } from 'src/domain/shared/Entity';
import { TeamName } from '../vo/TeamName';
import { Pair } from './Pair';
import { TeamId } from '../vo/TeamId';

interface TeamCreateArgs {
  teamName: TeamName;
  pairs: Pair[];
}

interface TeamBaseProps {
  teamName: TeamName;
  pairs: Pair[];
}

export class Team extends Entity<TeamBaseProps, TeamId> {
  public static create(args: TeamCreateArgs): Team {
    if (!this.haveEnoughParticipants(args.pairs)) {
      throw new Error('チームは、最低でも3名の参加者が必要です。');
    }

    const id = TeamId.create();

    const baseProps: TeamBaseProps = {
      ...args,
    };

    return new Team(id, baseProps);
  }

  public static haveEnoughParticipants(pairs: Pair[]): boolean {
    const total = 0;
    pairs.map((pair) => total + pair.props.participants.length);
    return total >= 3;
  }
}
