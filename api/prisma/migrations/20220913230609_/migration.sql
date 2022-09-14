/*
  Warnings:

  - The `state` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "UserState" AS ENUM ('ACTIVE', 'BLOCKED', 'NOTCONFIRMED');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "state",
ADD COLUMN     "state" "UserState" NOT NULL DEFAULT 'NOTCONFIRMED';
