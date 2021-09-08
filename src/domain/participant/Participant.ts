import { Entity } from '../shared/Entity';
import { TaskId } from '../task/TaskId';
import { PairId } from '../team/PairId';
import { EnrollmentStatusType } from './EnrollmentStatus';
import { ParticipantEmail } from './ParticipantEmail';
import { ParticipantId } from './ParticipantId';
import { ParticipantName } from './ParticipantName';

interface ParticipantCreateArgs {
  name: ParticipantName;
  email: ParticipantEmail;
  tasks?: TaskId[];
  pair?: PairId;
}

interface ParticipantBaseProps {
  name: ParticipantName;
  email: ParticipantEmail;
  status: EnrollmentStatusType;
  tasks?: TaskId[];
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
      tasks: args.tasks ? args.tasks : ([] as TaskId[]),
      pair: args.pair ? args.pair : null,
    };

    return new Participant(id, baseProps);
  }
}
