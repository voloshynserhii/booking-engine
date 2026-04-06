/*
  Warnings:

  - You are about to drop the `Rate` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Rate" DROP CONSTRAINT "Rate_roomId_fkey";

-- DropTable
DROP TABLE "Rate";
