/*
  Warnings:

  - Added the required column `priceAtBooking` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "priceAtBooking" DECIMAL(10,2) NOT NULL;

-- CreateTable
CREATE TABLE "_RatePlanToRoom" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RatePlanToRoom_AB_unique" ON "_RatePlanToRoom"("A", "B");

-- CreateIndex
CREATE INDEX "_RatePlanToRoom_B_index" ON "_RatePlanToRoom"("B");

-- AddForeignKey
ALTER TABLE "_RatePlanToRoom" ADD CONSTRAINT "_RatePlanToRoom_A_fkey" FOREIGN KEY ("A") REFERENCES "RatePlan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RatePlanToRoom" ADD CONSTRAINT "_RatePlanToRoom_B_fkey" FOREIGN KEY ("B") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;
