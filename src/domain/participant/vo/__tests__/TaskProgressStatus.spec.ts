import { DomainException } from '../../../shared/DomainException';
import { TaskProgressStatus } from '../TaskProgressStatus';

describe('値オブジェクト<進捗ステータス> TaskProgressStatus', () => {
  it('進捗ステータスを生成すると、「未着手」の状態で生成される', () => {
    // Arrange
    // Act
    const taskProgressStatus = TaskProgressStatus.create();

    // Assert
    expect(taskProgressStatus.value).toBe('未着手');
  });

  describe('進捗ステータスを1つ先の状態に変更する', () => {
    it('「未着手」の状態から1つ先の状態に変更すると「着手中」に遷移する', () => {
      // Arrange
      const taskProgressStatus = TaskProgressStatus.create();

      // Act
      const target = taskProgressStatus.makeStatusNext();

      // Assert
      expect(target.value).toBe('着手中');
    });
    it('「着手中」の状態から1つ先の状態に変更すると「レビュー中」に遷移する', () => {
      // Arrange
      const taskProgressStatus_NOT_YET = TaskProgressStatus.create();
      const taskProgressStatus_DOING =
        taskProgressStatus_NOT_YET.makeStatusNext();

      // Act
      const target = taskProgressStatus_DOING.makeStatusNext();

      // Assert
      expect(target.value).toBe('レビュー中');
    });
    it('「レビュー中」の状態から1つ先の状態に変更すると「完了」に遷移する', () => {
      // Arrange
      const taskProgressesStatus_NOT_YET = TaskProgressStatus.create();
      const taskProgressesStatus_DOING =
        taskProgressesStatus_NOT_YET.makeStatusNext();
      const taskProgressesStatus_IN_REVIEW =
        taskProgressesStatus_DOING.makeStatusNext();

      // Act
      const target = taskProgressesStatus_IN_REVIEW.makeStatusNext();

      // Assert
      expect(target.value).toBe('完了');
    });
    it('「完了」の状態から1つ先の状態に変更すると、例外が送出される', () => {
      // Arrange
      const taskProgressesStatus_NOT_YET = TaskProgressStatus.create();
      const taskProgressesStatus_DOING =
        taskProgressesStatus_NOT_YET.makeStatusNext();
      const taskProgressesStatus_IN_REVIEW =
        taskProgressesStatus_DOING.makeStatusNext();
      const taskProgressesStatus_DONE =
        taskProgressesStatus_IN_REVIEW.makeStatusNext();

      // Act
      const target = () => taskProgressesStatus_DONE.makeStatusNext();

      // Assert
      expect(target).toThrow('既に課題は「完了」済みです。');
      expect(target).toThrow(DomainException);
    });
  });

  describe('進捗ステータスを以前の状態に変更する', () => {
    it('「未着手」の状態から1つ前の状態に戻そうとすると例外が送出される', () => {
      // Arrange
      const taskProgressStatus = TaskProgressStatus.create();

      // Act
      const target = () => taskProgressStatus.makeStatusBack();

      // Assert
      expect(target).toThrow('「未着手」以前の状態に変更できません。');
      expect(target).toThrow(DomainException);
    });

    it('「着手中」の状態から1つ前の状態に戻すと、「未着手」の状態に変更される', () => {
      // Arrange
      const taskProgressStatus_NOT_YET = TaskProgressStatus.create();
      const taskProgressStatus_DOING =
        taskProgressStatus_NOT_YET.makeStatusNext();

      // Act
      const target = taskProgressStatus_DOING.makeStatusBack();

      // Assert
      expect(target.value).toBe('未着手');
    });

    it('「レビュー中」の状態から1つ前の状態に戻すと、「着手中」の状態に変更される', () => {
      // Arrange
      const taskProgressStatus_NOT_YET = TaskProgressStatus.create();
      const taskProgressStatus_DOING =
        taskProgressStatus_NOT_YET.makeStatusNext();
      const taskProgressStatus_IN_REVIEW =
        taskProgressStatus_DOING.makeStatusNext();

      // Act
      const target = taskProgressStatus_IN_REVIEW.makeStatusBack();

      // Assert
      expect(target.value).toBe('着手中');
    });

    it('「完了」の状態から1つ前の状態に戻すことはできず、例外が送出される', () => {
      // Arrange
      const taskProgressStatus_NOT_YET = TaskProgressStatus.create();
      const taskProgressStatus_DOING =
        taskProgressStatus_NOT_YET.makeStatusNext();
      const taskProgressStatus_IN_REVIEW =
        taskProgressStatus_DOING.makeStatusNext();
      const taskProgressStatus_DONE =
        taskProgressStatus_IN_REVIEW.makeStatusNext();

      // Act
      const target = () => taskProgressStatus_DONE.makeStatusBack();

      // Assert
      expect(target).toThrow('「完了」から以前の状態に変更できません。');
      expect(target).toThrow(DomainException);
    });
  });
});
