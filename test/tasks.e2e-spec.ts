import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';
import { TestPrismaService } from './utils/TestPrismaService';

describe('課題に対する受入テスト', () => {
  let app: INestApplication;
  let testClient: TestPrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    testClient = TestPrismaService.init();
  });

  beforeEach(async () => {
    await testClient.deleteAll();
  });

  afterAll(async () => {
    await testClient.close();
    await app.close();
  });

  it('Get /tasks', () => {
    // TODO: 課題を追加する機能が完成した後で、取得のテストを実行する
    return request(app.getHttpServer()).get('/tasks').expect(200);
  });
});
