import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';
import { resetDatabase } from './utils/PrismaUtils';

describe('参加者に対する受入テスト', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GET /participants', () => {
    const expected = {};

    return request(app.getHttpServer())
      .get('/participants')
      .expect(200)
      .expect(expected);
  });
});
