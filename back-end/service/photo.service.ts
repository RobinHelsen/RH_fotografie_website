import { Photo } from '../model/photo';
import fotoDb from '../repository/photo.db';
import { PhotoInput } from '../types/index';

const getAllPhotos = async (): Promise<Photo[]> => {
    return await fotoDb.getAllPhotos();
};

const createPhoto = async ({ photoAlbumId, title, url, explanation, credits }: PhotoInput): Promise<Photo> => {
    const newIncrementedId = await fotoDb.getNewIncrementedId();
    const photo = new Photo({ id: newIncrementedId, photoAlbumId, title, url, explanation, credits});
    return await fotoDb.createPhoto(photo);
};

export default {
    getAllPhotos,
    createPhoto,
};


