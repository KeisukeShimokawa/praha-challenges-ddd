import { EnrollmentStatusType } from 'src/domain/participant/EnrollmentStatus';
import { Participant } from 'src/domain/participant/Participant';
import { ParticipantEmail } from 'src/domain/participant/ParticipantEmail';
import { ParticipantName } from 'src/domain/participant/ParticipantName';
import { TaskId } from 'src/domain/task/TaskId';

describe('エンティティ<参加者> Paricipant', () => {
  describe('初期状態でエンティティを生成できる', () => {
    it('名前、メールアドレスを引数で与えて、在籍ステータス・課題・ペアはデフォルト値を設定する', () => {
      // Arrange
      const name = ParticipantName.create('shimokawa');
      const email = ParticipantEmail.create('shimoke4869@gmail.com');

      // Act
      const participant = Participant.create({
        name: name,
        email: email,
      });

      // Assert
      expect(participant.props).toEqual({
        name: name,
        email: email,
        status: EnrollmentStatusType.ENROLLMENT,
        tasks: [] as TaskId[],
        pair: null,
      });
    });
  });
});
