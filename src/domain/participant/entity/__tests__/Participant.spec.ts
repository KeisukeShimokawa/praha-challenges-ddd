import { ParticipantEmail } from '../../vo/ParticipantEmail';
import { Participant } from '../Participant';

describe('エンティティ<参加者> Paricipant', () => {
  it('参加者を新しく追加すると、「在籍中」でありチームやペアに所属していないインスタンスが生成される', () => {
    // Arrange
    const name = 'shimokawa';
    const email = ParticipantEmail.create('shimoke4869@gmail.com');

    // Act
    const participant = Participant.create({ name, email });

    // Assert
    expect(participant.props.name).toEqual(name);
    expect(participant.props.email).toEqual(email);
    expect(participant.props.status).toEqual('在籍中');
    expect(participant.props.tasks.length).toEqual(0);
    expect(participant.props.pair).toBeNull();
  });
});
