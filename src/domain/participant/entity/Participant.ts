import { Entity } from '../../shared/Entity';
import { PairId } from '../../team/vo/PairId';
import { EnrollmentStatusType } from '../vo/ParticipantEnrollmentStatus';
import { ParticipantEmail } from '../vo/ParticipantEmail';
import { ParticipantId } from '../vo/ParticipantId';
import { TaskProgress } from './TaskProgress';

interface ParticipantCreateArgs {
  name: string;
  email: ParticipantEmail;
  tasks?: TaskProgress[];
  pair?: PairId;
}

interface ParticipantBaseProps {
  name: string;
  email: ParticipantEmail;
  status: EnrollmentStatusType;
  tasks?: TaskProgress[];
  pair?: PairId;
}

export class Participant extends Entity<ParticipantBaseProps, ParticipantId> {
  get props(): ParticipantBaseProps {
    return this._props;
  }

  public static create(args: ParticipantCreateArgs): Participant {
    const id = ParticipantId.create();

    const baseProps = {
      ...args,
      status: EnrollmentStatusType.ENROLLMENT,
      tasks: args.tasks ? args.tasks : ([] as TaskProgress[]),
      pair: args.pair ? args.pair : null,
    };

    return new Participant(id, baseProps);
  }
}
