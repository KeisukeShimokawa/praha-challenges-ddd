import { DomainException } from '../../../shared/DomainException';
import { TaskTitle } from '../TaskTitle';

describe('値オブジェクト <課題名> TaskTitle', () => {
  it('課題名に1文字以上の文字列を指定すると、課題名のインスタンスが生成される', () => {
    // Arrange
    const expected = 'サンプルタイトル';

    // Act
    const taskTitle = TaskTitle.create(expected);

    // Assert
    expect(taskTitle.value).toEqual(expected);
  });

  it('課題名が空文字の場合に、例外メッセージが送出される', () => {
    // Arrange
    const emptyTitle = '';
    const expected = '課題のタイトルが設定されていません。';

    // Act
    const target = () => TaskTitle.create(emptyTitle);

    // Assert
    expect(target).toThrow(expected);
    expect(target).toThrow(DomainException);
  });
});
