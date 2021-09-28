import { ParticipantId } from 'src/domain/participant/vo/ParticipantId';
import { Entity } from 'src/domain/shared/Entity';
import { PairId } from '../vo/PairId';
import { PairName } from '../vo/PairName';

interface PairCreateArgs {
  pairName: PairName;
  participants: ParticipantId[];
}

interface PairBaseProps {
  pairName: PairName;
  participants: ParticipantId[];
}

export class Pair extends Entity<PairBaseProps, PairId> {
  get props() {
    return this._props;
  }

  public static create(args: PairCreateArgs): Pair {
    if (this.haveEnoughParticipants(args.participants)) {
      throw new Error('ペアは、2名から3名の参加者を指定してください。');
    }

    const id = PairId.create();

    const baseProps: PairBaseProps = {
      ...args,
    };

    return new Pair(id, baseProps);
  }

  private static haveEnoughParticipants(
    participants: ParticipantId[],
  ): boolean {
    const members = participants.length;
    return members === 2 || members === 3;
  }
}
