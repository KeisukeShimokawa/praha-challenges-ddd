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
  /**
   * 在籍ステータスが「在籍中」であり、どのチームやペアに所属していないインスタンスを生成
   *
   * @param args 参加者を追加する上で必要な情報
   * @returns 参加者をどのチームやペアにも所属していない状態のインスタンス
   */
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
