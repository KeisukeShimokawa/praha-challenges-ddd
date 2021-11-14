import { DomainException } from '../../../shared/DomainException';
import { ParticipantEmail } from '../ParticipantEmail';

describe('値オブジェクト<"参加者のメールアドレス"> ParticipantEmail', () => {
  describe('参加者のメールアドレスの制約に従う引数を受け取った場合、値オブジェクトを生成できる', () => {
    it('"shimoke4869@gmail.com" を引数に指定し、値オブジェクトを生成する', () => {
      // Arrange
      const expected = 'shimoke4869@gmail.com';

      // Act
      const actual = ParticipantEmail.create(expected);

      // Assert
      expect(actual.value).toBe(expected);
    });
  });

  describe('参加者のメールアドレスの制約に従わない引数を受け取った場合、例外を送出する', () => {
    it('"shimokawa" を引数に指定し、"メールアドレスが正しいフォーマットではありません。" という例外を送出する', () => {
      // Arrange
      const expected = 'メールアドレスが正しいフォーマットではありません。';
      const testData = 'shimokawa';

      // Act
      const target = () => ParticipantEmail.create(testData);

      // Assert
      expect(target).toThrow(new DomainException(expected));
    });
  });
});
