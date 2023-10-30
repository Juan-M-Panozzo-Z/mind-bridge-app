/*
  Warnings:

  - You are about to drop the column `patientId` on the `circles` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `circles` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "circles" DROP CONSTRAINT "circles_patientId_fkey";

-- AlterTable
ALTER TABLE "circles" DROP COLUMN "patientId",
ALTER COLUMN "password" SET DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "circles_name_key" ON "circles"("name");
