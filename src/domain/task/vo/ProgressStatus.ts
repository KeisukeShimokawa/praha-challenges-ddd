export const ProgressStatus = {
  NOT_YET: '未着手',
  DOING: '着手中',
  IN_REVIEW: 'レビュー中',
  DONE: '完了',
} as const;

export type ProgressStatus = typeof ProgressStatus[keyof typeof ProgressStatus];
