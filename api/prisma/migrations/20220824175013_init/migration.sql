-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "category" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "img" TEXT,
    "state" TEXT,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
