import { PhotoAlbum } from '../model/photoalbum';
import photoAlbumDb from '../repository/photoalbum.db';
import { PhotoAlbumInput } from '../types/index';
import userDb from '../repository/user.db';

const getAllPhotoAlbums = async (): Promise<PhotoAlbum[]> => {
    return await photoAlbumDb.getAllPhotoAlbums();
};

const createPhotoAlbum = async ({ photographerId, photographedUserId, albumname }: PhotoAlbumInput): Promise<PhotoAlbum> => {
    // Fetch users by ID
    const photographerFromDb = await userDb.getUserById({ id: photographerId }); // Ensure { id: number } format
    const photographedUserFromDb = await userDb.getUserById({ id: photographedUserId }); // Ensure { id: number } format

    // Ensure both users exist
    if (!photographerFromDb || !photographedUserFromDb) {
        throw new Error('Photographer or photographed user not found.');
    }

    // Generate new ID
    const newIncrementedId = await photoAlbumDb.getNewIncrementedId();

    // Create the new PhotoAlbum instance
    const photoAlbum = new PhotoAlbum({
        id: newIncrementedId,
        photographer: photographerFromDb,
        photographedUser: photographedUserFromDb,
        albumname,
        photos: [],
    });

    return await photoAlbumDb.createPhotoAlbum(photoAlbum);
};


export default {
    getAllPhotoAlbums,
    createPhotoAlbum,
};


