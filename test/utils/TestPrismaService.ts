import { PrismaClient } from '.prisma/client';

export class TestPrismaService {
  constructor(private readonly prisma: PrismaClient) {}

  public static init() {
    return new TestPrismaService(new PrismaClient());
  }

  public async deleteAll() {
    const deleteTaskProgresses = this.prisma.taskProgresses.deleteMany();
    const deleteTeamsWithPairs = this.prisma.teamWithPairs.deleteMany();
    const deletePairs = this.prisma.pair.deleteMany();
    const deleteTeams = this.prisma.team.deleteMany();
    const deleteParticipants = this.prisma.participant.deleteMany();

    await this.prisma.$transaction([
      deleteTaskProgresses,
      deleteTeamsWithPairs,
      deletePairs,
      deleteTeams,
      deleteParticipants,
    ]);

    console.debug('delete all tables ...');
  }

  public async close() {
    await this.prisma.$disconnect();
    console.debug('testing prisma client disconnected ...');
  }
}
