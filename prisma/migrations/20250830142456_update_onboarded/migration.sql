/*
  Warnings:

  - You are about to drop the column `onboarded` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Profile" ADD COLUMN     "onboarded" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "onboarded";
