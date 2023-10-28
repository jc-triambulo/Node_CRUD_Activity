/*
  Warnings:

  - You are about to drop the column `firstName` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[employeeId]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `employeeId` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeName` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "firstName",
DROP COLUMN "image",
DROP COLUMN "lastName",
ADD COLUMN     "employeeId" INTEGER NOT NULL,
ADD COLUMN     "employeeName" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Lines" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Lines_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_employeeId_key" ON "Users"("employeeId");
