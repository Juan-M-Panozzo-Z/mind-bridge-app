/*
  Warnings:

  - Added the required column `owner` to the `circle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "circle" ADD COLUMN     "owner" TEXT NOT NULL;
