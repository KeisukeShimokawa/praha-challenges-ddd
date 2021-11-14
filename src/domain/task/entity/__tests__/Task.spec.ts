import { TaskTitle } from '../../vo/TaskTitle';
import { Task } from '../Task';

describe('エンティティ<課題> Task', () => {
  it('新しい課題を作成すると、どの課題進捗にも紐づかない状態でインスタンスが生成される', () => {
    // Arrange
    const title = TaskTitle.create('サンプル');

    // Act
    const task = Task.create({ title });

    // Assert
    expect(task.props.title).toEqual(title);
    expect(task.props.taskProgressIds.length).toEqual(0);
  });
});
