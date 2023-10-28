/*
  Warnings:

  - Added the required column `lineName` to the `Lines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Lines` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lines" ADD COLUMN     "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dateModified" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "lineName" TEXT NOT NULL,
ADD COLUMN     "status" INTEGER NOT NULL;
