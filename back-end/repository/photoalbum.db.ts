import { get } from 'http';
import { PhotoAlbum } from '../model/photoalbum';
import database from '../util/database';

const getAllPhotoAlbums = async (): Promise<PhotoAlbum[]> => {
    try {
        const photoAlbumsPrisma = await database.photoAlbum.findMany();
        return Promise.all(photoAlbumsPrisma.map(async (photoAlbumPrisma) => await PhotoAlbum.from(photoAlbumPrisma)));
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const getPhotoAlbumById = async (id: number): Promise<PhotoAlbum> => {
    try {
        const photoAlbumPrisma = await database.photoAlbum.findUnique({
            where: { id },
        });

        if (!photoAlbumPrisma) {
            throw new Error('Photo album not found.');
        }

        return PhotoAlbum.from(photoAlbumPrisma);
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const getNewIncrementedId = async (): Promise<number> => {
    try {
        const photoAlbumsPrisma = await database.photoAlbum.findMany({
            select: { id: true },
        });
        const maxId = photoAlbumsPrisma.reduce((max, photoAlbum) => (photoAlbum.id > max ? photoAlbum.id : max), 0);
        return maxId + 1;
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const createPhotoAlbum = async (photoAlbum: PhotoAlbum): Promise<PhotoAlbum> => {
    try {
        const photoAlbumPrisma = await database.photoAlbum.create({
            data: {
                id: photoAlbum.getId(),
                albumname: photoAlbum.getAlbumName(),
                photographerId: photoAlbum.getPhotographer().getId(),
                photographedUserId: photoAlbum.getPhotographedUser().getId(),
            },
        });

        return PhotoAlbum.from(photoAlbumPrisma);
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

export default {
    getAllPhotoAlbums,
    getNewIncrementedId,
    createPhotoAlbum,
    getPhotoAlbumById
};

