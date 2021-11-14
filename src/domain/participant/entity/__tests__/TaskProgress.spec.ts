import { TaskId } from '../../../task/vo/TaskId';
import { ParticipantId } from '../../vo/ParticipantId';
import { TaskProgress } from '../TaskProgress';

describe('エンティティ<課題進捗> TaskProgress', () => {
  it('新しく課題進捗を追加すると、進捗ステータスが未着手の状態でインスタンスが生成される', () => {
    // Arrange
    const taskId = TaskId.create('1');
    const participantId = ParticipantId.create('2');

    // Act
    const taskProgress = TaskProgress.create({ taskId, participantId });

    // Assert
    expect(taskProgress.props.taskId).toEqual(taskId);
    expect(taskProgress.props.participantId).toEqual(participantId);
    expect(taskProgress.props.progressStatus).toEqual('未着手');
  });
});
