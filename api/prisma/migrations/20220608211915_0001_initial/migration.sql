-- CreateTable
CREATE TABLE "Item" (
    "skuId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "specs" JSONB NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("skuId")
);

-- CreateTable
CREATE TABLE "ItemPrice" (
    "id" SERIAL NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "asOf" TIMESTAMP(3) NOT NULL,
    "itemId" INTEGER NOT NULL,

    CONSTRAINT "ItemPrice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ItemPrice" ADD CONSTRAINT "ItemPrice_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("skuId") ON DELETE RESTRICT ON UPDATE CASCADE;
