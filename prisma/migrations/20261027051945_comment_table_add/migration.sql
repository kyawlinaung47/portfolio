-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "credit" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "supplier" ALTER COLUMN "contact" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);
