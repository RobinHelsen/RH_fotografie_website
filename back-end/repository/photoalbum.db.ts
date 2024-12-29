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

export default {
    getAllPhotoAlbums
};

