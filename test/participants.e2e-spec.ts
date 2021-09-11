import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';
import { GetAllParticipantResponse } from 'src/presentation/participant/response/GetAllParticipant.response';

describe('参加者に対する受入テスト', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  beforeEach(async () => {
    // await resetDatabase();
  });

  it('GET /participants', () => {
    const expected: GetAllParticipantResponse = {
      allParticipant: [
        {
          id: '1',
          name: '1',
          email: '1',
          tasks: [],
          pair: null,
        },
      ],
    };

    return request(app.getHttpServer()).get('/participants').expect(404);
    // .expect(200)
    // .expect(expected);
  });
});
