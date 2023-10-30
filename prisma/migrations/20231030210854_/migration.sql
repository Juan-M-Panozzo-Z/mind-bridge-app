-- DropForeignKey
ALTER TABLE "circle" DROP CONSTRAINT "circle_patientId_fkey";

-- AlterTable
ALTER TABLE "circle" ALTER COLUMN "patientId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "circle" ADD CONSTRAINT "circle_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patient"("id") ON DELETE SET NULL ON UPDATE CASCADE;
