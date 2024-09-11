/*
  Warnings:

  - You are about to drop the column `companyId` on the `Proposal` table. All the data in the column will be lost.
  - Added the required column `companyApplicatorId` to the `Proposal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Proposal" DROP CONSTRAINT "Proposal_companyId_fkey";

-- AlterTable
ALTER TABLE "Proposal" DROP COLUMN "companyId",
ADD COLUMN     "companyApplicatorId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_companyApplicatorId_fkey" FOREIGN KEY ("companyApplicatorId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
