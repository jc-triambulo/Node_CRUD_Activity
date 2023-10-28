-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dateModified" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Stations" (
    "id" SERIAL NOT NULL,
    "stationName" TEXT NOT NULL,
    "stationAlias" TEXT NOT NULL,
    "isLastStation" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,
    "lineId" INTEGER NOT NULL,

    CONSTRAINT "Stations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LineUserStations" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "stationId" INTEGER NOT NULL,

    CONSTRAINT "LineUserStations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LineUserStationsToUsers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_LineUserStationsToStations" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LineUserStationsToUsers_AB_unique" ON "_LineUserStationsToUsers"("A", "B");

-- CreateIndex
CREATE INDEX "_LineUserStationsToUsers_B_index" ON "_LineUserStationsToUsers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LineUserStationsToStations_AB_unique" ON "_LineUserStationsToStations"("A", "B");

-- CreateIndex
CREATE INDEX "_LineUserStationsToStations_B_index" ON "_LineUserStationsToStations"("B");

-- AddForeignKey
ALTER TABLE "Stations" ADD CONSTRAINT "Stations_lineId_fkey" FOREIGN KEY ("lineId") REFERENCES "Lines"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LineUserStationsToUsers" ADD CONSTRAINT "_LineUserStationsToUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "LineUserStations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LineUserStationsToUsers" ADD CONSTRAINT "_LineUserStationsToUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LineUserStationsToStations" ADD CONSTRAINT "_LineUserStationsToStations_A_fkey" FOREIGN KEY ("A") REFERENCES "LineUserStations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LineUserStationsToStations" ADD CONSTRAINT "_LineUserStationsToStations_B_fkey" FOREIGN KEY ("B") REFERENCES "Stations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
