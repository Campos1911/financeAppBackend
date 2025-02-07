/*
  Warnings:

  - You are about to drop the column `texto` on the `Analise` table. All the data in the column will be lost.
  - Added the required column `response` to the `Analise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Analise` DROP COLUMN `texto`,
    ADD COLUMN `response` JSON NOT NULL;
