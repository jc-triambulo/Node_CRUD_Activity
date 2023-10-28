/*
  Warnings:

  - Added the required column `status` to the `LineUserStations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LineUserStations" ADD COLUMN     "status" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "status" INTEGER NOT NULL;
