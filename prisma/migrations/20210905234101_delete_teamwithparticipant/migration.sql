/*
  Warnings:

  - You are about to drop the `team_with_participant` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `teamId` to the `pair` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "team_with_participant" DROP CONSTRAINT "team_with_participant_participantId_fkey";

-- DropForeignKey
ALTER TABLE "team_with_participant" DROP CONSTRAINT "team_with_participant_teamId_fkey";

-- AlterTable
ALTER TABLE "pair" ADD COLUMN     "teamId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "participant" ALTER COLUMN "pairId" DROP NOT NULL;

-- DropTable
DROP TABLE "team_with_participant";

-- CreateTable
CREATE TABLE "team_with_pair" (
    "teamId" TEXT NOT NULL,
    "pairId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "team_with_pair.teamId_pairId_unique" ON "team_with_pair"("teamId", "pairId");

-- CreateIndex
CREATE UNIQUE INDEX "team_with_pair_pairId_unique" ON "team_with_pair"("pairId");

-- AddForeignKey
ALTER TABLE "team_with_pair" ADD FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_with_pair" ADD FOREIGN KEY ("pairId") REFERENCES "pair"("id") ON DELETE CASCADE ON UPDATE CASCADE;
