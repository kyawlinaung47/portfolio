-- CreateTable
CREATE TABLE "Items" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "addQuantity" INTEGER DEFAULT 0,
    "selected" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "credit" INTEGER NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supplier" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "contact" INTEGER NOT NULL,

    CONSTRAINT "supplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "customerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseVendor" (
    "id" SERIAL NOT NULL,
    "supplierId" INTEGER NOT NULL,
    "purchaseTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "selected" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "PurchaseVendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseVendorItems" (
    "id" SERIAL NOT NULL,
    "purchaseVendorId" INTEGER NOT NULL,
    "itemQuantity" INTEGER NOT NULL DEFAULT 0,
    "itemId" INTEGER NOT NULL,

    CONSTRAINT "PurchaseVendorItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saleVendor" (
    "id" SERIAL NOT NULL,
    "customerId" INTEGER NOT NULL,
    "saleTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "selected" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "saleVendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saleVendorItems" (
    "id" SERIAL NOT NULL,
    "saleVendorId" INTEGER NOT NULL,
    "itemQuantity" INTEGER NOT NULL DEFAULT 0,
    "itemId" INTEGER NOT NULL,

    CONSTRAINT "saleVendorItems_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseVendor" ADD CONSTRAINT "PurchaseVendor_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseVendorItems" ADD CONSTRAINT "PurchaseVendorItems_purchaseVendorId_fkey" FOREIGN KEY ("purchaseVendorId") REFERENCES "PurchaseVendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseVendorItems" ADD CONSTRAINT "PurchaseVendorItems_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saleVendor" ADD CONSTRAINT "saleVendor_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saleVendorItems" ADD CONSTRAINT "saleVendorItems_saleVendorId_fkey" FOREIGN KEY ("saleVendorId") REFERENCES "saleVendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saleVendorItems" ADD CONSTRAINT "saleVendorItems_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
