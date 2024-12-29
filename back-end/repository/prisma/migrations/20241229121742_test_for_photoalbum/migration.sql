-- CreateTable
CREATE TABLE "PhotoAlbum" (
    "id" SERIAL NOT NULL,
    "photographerId" INTEGER NOT NULL,
    "photographedUserId" INTEGER NOT NULL,
    "albumname" TEXT NOT NULL,

    CONSTRAINT "PhotoAlbum_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_photoAlbumId_fkey" FOREIGN KEY ("photoAlbumId") REFERENCES "PhotoAlbum"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhotoAlbum" ADD CONSTRAINT "PhotoAlbum_photographerId_fkey" FOREIGN KEY ("photographerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhotoAlbum" ADD CONSTRAINT "PhotoAlbum_photographedUserId_fkey" FOREIGN KEY ("photographedUserId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
