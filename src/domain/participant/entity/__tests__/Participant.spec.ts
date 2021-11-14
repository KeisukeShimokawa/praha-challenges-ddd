import { ParticipantEmail } from '../../vo/ParticipantEmail';
import { Participant } from '../Participant';

describe('エンティティ<参加者> Paricipant', () => {
  describe('初期状態でエンティティを生成できる', () => {
    it('名前、メールアドレスを引数で与えて、在籍ステータス・課題・ペアはデフォルト値が設定されている', () => {
      // Arrange
      const name = 'shimokawa';
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
        tasks: [] as TaskProgress[],
        pair: null,
      });
    });
  });
});
