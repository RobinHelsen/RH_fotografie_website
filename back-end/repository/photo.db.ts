import { Photo } from '../model/photo';
import database from '../util/database';

const getAllPhotos = async (): Promise<Photo[]> => {
    try {
        const photosPrisma = await database.photo.findMany();
        return photosPrisma.map((photoPrisma) => Photo.from(photoPrisma));
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const getNewIncrementedId = async (): Promise<number> => {
    try {
        const photosPrisma = await database.photo.findMany({
            select: { id: true },
        });
        const maxId = photosPrisma.reduce((max, photo) => (photo.id > max ? photo.id : max), 0);
        return maxId + 1;
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const createPhoto = async (photo: Photo): Promise<Photo> => {
    try {
        const photoPrisma = await database.photo.create({
            data: {
                id: photo.getId(),
                photoAlbumId: photo.getPhotoAlbumId() ?? 0,
                title: photo.getTitle(),
                url: photo.getUrl(),
                explanation: photo.getExplanation(),
                credits: photo.getCredits(),
            },
        });
        return Photo.from(photoPrisma);
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

export default {
    getNewIncrementedId,
    getAllPhotos,
    createPhoto
};