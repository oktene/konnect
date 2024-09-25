/*
  Warnings:

  - Added the required column `proposalId` to the `Attachment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Proposal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Attachment" ADD COLUMN     "proposalId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Proposal" ADD COLUMN     "description" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_proposalId_fkey" FOREIGN KEY ("proposalId") REFERENCES "Proposal"("id") ON DELETE CASCADE ON UPDATE CASCADE;
