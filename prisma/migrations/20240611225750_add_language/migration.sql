/*
  Warnings:

  - Made the column `language` on table `Chat` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Chat" ALTER COLUMN "language" SET NOT NULL;
