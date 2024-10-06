/*
  Warnings:

  - The values [LOCACAO] on the enum `TypeOpportunity` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `quantity` on the `Opportunity` table. All the data in the column will be lost.
  - You are about to drop the column `unityMetric` on the `Opportunity` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'EDITOR';

-- AlterEnum
BEGIN;
CREATE TYPE "TypeOpportunity_new" AS ENUM ('SERVICO', 'MATERIAL');
ALTER TABLE "Opportunity" ALTER COLUMN "typeOpportunity" TYPE "TypeOpportunity_new" USING ("typeOpportunity"::text::"TypeOpportunity_new");
ALTER TYPE "TypeOpportunity" RENAME TO "TypeOpportunity_old";
ALTER TYPE "TypeOpportunity_new" RENAME TO "TypeOpportunity";
DROP TYPE "TypeOpportunity_old";
COMMIT;

-- AlterTable
ALTER TABLE "Opportunity" DROP COLUMN "quantity",
DROP COLUMN "unityMetric";
