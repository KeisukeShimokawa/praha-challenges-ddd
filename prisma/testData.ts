import { Prisma } from '@prisma/client';

/**
 * 課題
 */
export const tasks: Prisma.TaskCreateInput[] = [
  {
    id: '1',
    name: 'task01',
    description: 'task01 for web funcdamentals',
  },
  {
    id: '2',
    name: 'task02',
    description: 'task02 for test fundamentals',
  },
];

/**
 * 参加者
 */
export const participants: Prisma.ParticipantCreateInput[] = [
  {
    id: '1',
    name: 'test user 01',
    email: 'test-user-01@example.com',
    enrollmentStatus: '在籍中',
  },
  {
    id: '2',
    name: 'test user 02',
    email: 'test-user-02@example.com',
    enrollmentStatus: '在籍中',
  },
  {
    id: '3',
    name: 'test user 03',
    email: 'test-user-03@example.com',
    enrollmentStatus: '休会中',
  },
  {
    id: '4',
    name: 'test user 04',
    email: 'test-user-04@example.com',
    enrollmentStatus: '退会済',
  },
];

/**
 * 課題進捗
 */
export const taskProgresses: Prisma.TaskProgressesCreateInput[] = [
  {
    task: { connect: { id: '1' } },
    participant: { connect: { id: '1' } },
    progressStatus: '完了',
  },
  {
    task: { connect: { id: '2' } },
    participant: { connect: { id: '1' } },
    progressStatus: '完了',
  },
  {
    task: { connect: { id: '1' } },
    participant: { connect: { id: '2' } },
    progressStatus: 'レビュー中',
  },
  {
    task: { connect: { id: '2' } },
    participant: { connect: { id: '2' } },
    progressStatus: '着手中',
  },
  {
    task: { connect: { id: '1' } },
    participant: { connect: { id: '3' } },
    progressStatus: '未着手',
  },
];

/**
 * チーム
 */
export const teams: Prisma.TeamCreateInput[] = [
  {
    id: '1',
    name: 't01',
  },
];

/**
 * ペア
 */
export const pairs: Prisma.PairCreateInput[] = [
  {
    id: '1',
    name: 'p01',
    team: {
      connect: {
        teamId_pairId: {
          teamId: '1',
          pairId: '1',
        },
      },
    },
    teamId: '1',
  },
];
