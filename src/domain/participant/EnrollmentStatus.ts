// import { ValueObject } from '../shared/ValueObject';

export const EnrollmentStatusType = {
  ENROLLMENT: '在籍中',
  ABSENCE: '休会中',
  WITHDRAWAL: '退会済',
} as const;

export type EnrollmentStatusType =
  typeof EnrollmentStatusType[keyof typeof EnrollmentStatusType];

// export class EnrollmentStatus extends ValueObject<
//   EnrollmentStatusType,
//   'EnrollmentStatus'
// > {
//   public static create(): EnrollmentStatus {
//     return new EnrollmentStatus(EnrollmentStatusType.ENROLLMENT);
//   }
// }
