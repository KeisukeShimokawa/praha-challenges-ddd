import { TaskTitle } from 'src/domain/task/vo/TaskTitle';

describe('値オブジェクト <課題名> TaskTitle', () => {
  describe('設定する課題名が不正な値の場合に、例外を送出する', () => {
    it('課題名が空文字の場合に、例外メッセージが送出される', () => {
      // Arrange
      const emptyTitle = '';
      const expected = '課題のタイトルが設定されていません。';

      // Act
      // Assert
      try {
        TaskTitle.create(emptyTitle);
        fail();
      } catch (e: unknown) {
        if (e instanceof Error) {
          expect(e.message).toBe(expected);
        } else {
          fail();
        }
      }
    });
  });
});
