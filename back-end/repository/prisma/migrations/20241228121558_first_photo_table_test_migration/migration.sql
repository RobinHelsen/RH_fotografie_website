-- CreateTable
CREATE TABLE "Photo" (
    "id" SERIAL NOT NULL,
    "photoAlbumId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "explanation" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "credits" TEXT NOT NULL,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);
