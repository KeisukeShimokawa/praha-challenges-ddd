export const TaskProgressStatus = {
  NOT_YET: '未着手',
  DOING: '着手中',
  IN_REVIEW: 'レビュー中',
  DONE: '完了',
} as const;

export type TaskProgressStatus =
  typeof TaskProgressStatus[keyof typeof TaskProgressStatus];
