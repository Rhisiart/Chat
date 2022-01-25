/*
  Warnings:

  - The primary key for the `Chat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `MessageId` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Chat` table. All the data in the column will be lost.
  - The primary key for the `Group` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the column `create_on` on the `Groups` table. All the data in the column will be lost.
  - Added the required column `messageId` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_MessageId_fkey";

-- AlterTable
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_pkey",
DROP COLUMN "MessageId",
DROP COLUMN "id",
ADD COLUMN     "messageId" INTEGER NOT NULL,
ADD CONSTRAINT "Chat_pkey" PRIMARY KEY ("groupId", "messageId");

-- AlterTable
ALTER TABLE "Group" DROP CONSTRAINT "Group_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Group_pkey" PRIMARY KEY ("userId", "groupId");

-- AlterTable
ALTER TABLE "Groups" DROP COLUMN "create_on",
ADD COLUMN     "createOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
