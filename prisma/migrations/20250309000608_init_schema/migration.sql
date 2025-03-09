/*
  Warnings:

  - You are about to drop the column `curriculumId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `instructor` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `curriculumId` on the `Section` table. All the data in the column will be lost.
  - You are about to drop the `Curriculum` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `instructorId` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseId` to the `Section` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_curriculumId_fkey";

-- DropForeignKey
ALTER TABLE "Section" DROP CONSTRAINT "Section_curriculumId_fkey";

-- DropIndex
DROP INDEX "Course_curriculumId_key";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "curriculumId",
DROP COLUMN "instructor",
ADD COLUMN     "instructorId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Section" DROP COLUMN "curriculumId",
ADD COLUMN     "courseId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Curriculum";

-- CreateTable
CREATE TABLE "Instructor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Instructor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Instructor_name_key" ON "Instructor"("name");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
