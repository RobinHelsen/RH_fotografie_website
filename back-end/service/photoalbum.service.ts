import { PhotoAlbum } from '../model/photoalbum';
import photoAlbumDb from '../repository/photoalbum.db';
// import { PhotoAlbumInput } from '../types/index';

const getAllPhotoAlbums = async (): Promise<PhotoAlbum[]> => {
    return await photoAlbumDb.getAllPhotoAlbums();
}

export default {
    getAllPhotoAlbums
};

