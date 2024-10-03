-- CreateTable
CREATE TABLE "DeviceData" (
    "id" SERIAL NOT NULL,
    "device" TEXT NOT NULL,
    "start_time" INTEGER NOT NULL,
    "mbrt" INTEGER NOT NULL,
    "data_extra" JSONB NOT NULL,

    CONSTRAINT "DeviceData_pkey" PRIMARY KEY ("id")
);
