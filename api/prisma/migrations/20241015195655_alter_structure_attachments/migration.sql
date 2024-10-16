-- AlterTable
ALTER TABLE "Attachment" ADD COLUMN     "name" TEXT,
ALTER COLUMN "proposalId" DROP NOT NULL;
