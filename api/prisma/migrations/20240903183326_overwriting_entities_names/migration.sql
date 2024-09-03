/*
  Warnings:

  - You are about to drop the column `oportunityId` on the `Attachment` table. All the data in the column will be lost.
  - You are about to drop the column `oportunityId` on the `Proposal` table. All the data in the column will be lost.
  - You are about to drop the `Oportuninity` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `opportunityId` to the `Attachment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `opportunityId` to the `Proposal` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TypeOpportunity" AS ENUM ('SERVICO', 'MATERIAL');

-- DropForeignKey
ALTER TABLE "Attachment" DROP CONSTRAINT "Attachment_oportunityId_fkey";

-- DropForeignKey
ALTER TABLE "Oportuninity" DROP CONSTRAINT "Oportuninity_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Oportuninity" DROP CONSTRAINT "Oportuninity_subCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "Proposal" DROP CONSTRAINT "Proposal_oportunityId_fkey";

-- AlterTable
ALTER TABLE "Attachment" DROP COLUMN "oportunityId",
ADD COLUMN     "opportunityId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Proposal" DROP COLUMN "oportunityId",
ADD COLUMN     "opportunityId" UUID NOT NULL;

-- DropTable
DROP TABLE "Oportuninity";

-- DropEnum
DROP TYPE "TypeOportunity";

-- CreateTable
CREATE TABLE "Opportunity" (
    "id" UUID NOT NULL,
    "codeRFQ" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" INTEGER,
    "unityMetric" TEXT,
    "executionPeriod" TIMESTAMP(3),
    "deadlineSubmission" TIMESTAMP(3) NOT NULL,
    "typeOpportunity" "TypeOpportunity" NOT NULL,
    "isExpired" BOOLEAN NOT NULL DEFAULT false,
    "companyId" UUID NOT NULL,
    "subCategoryId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Opportunity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Opportunity_codeRFQ_key" ON "Opportunity"("codeRFQ");

-- AddForeignKey
ALTER TABLE "Opportunity" ADD CONSTRAINT "Opportunity_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Opportunity" ADD CONSTRAINT "Opportunity_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "SubCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_opportunityId_fkey" FOREIGN KEY ("opportunityId") REFERENCES "Opportunity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_opportunityId_fkey" FOREIGN KEY ("opportunityId") REFERENCES "Opportunity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
