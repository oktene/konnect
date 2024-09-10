-- AlterTable
ALTER TABLE "User" ADD COLUMN     "recoveryToken" TEXT,
ADD COLUMN     "recoveryTokenExpires" TIMESTAMP(3);
