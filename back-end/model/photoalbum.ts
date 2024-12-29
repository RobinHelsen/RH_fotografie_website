import { Photo } from '../model/photo';
import { User } from '../model/user';
import { PhotoAlbum as PhotoAlbumPrisma } from '@prisma/client';
const prisma = new PrismaClient();

export class PhotoAlbum {
    private id: number;
    private photographer: User;
    private photographedUser: User;
    private albumname: string;
    private photos: Photo[];

    constructor(photoalbum: { id: number; photographer: User; photographedUser: User; albumname: string; photos: Photo[]; }) {
        this.validate(photoalbum);

        this.id = photoalbum.id;
        this.photographer = photoalbum.photographer;
        this.photographedUser = photoalbum.photographedUser;
        this.albumname = photoalbum.albumname;
        this.photos = photoalbum.photos || [];
    }
    /* // DOES THE SAME BUT NOT AS READABLE
    constructor({ id, photographer, photographedUser, albumname, photos}: { id: number; photographer: User; photographedUser: User; albumname: string; photos: Photos[]; }) {
        this.validate({id, photographer, photographedUser, albumname, photos});
        this.id = id;
        this.photographer = photographer;
        this.photographedUser = photographedUser;
        this.albumname = albumname;
        this.photos = photos;
    }*/

    validate(photoalbum: { id: number; photographer: User; photographedUser: User; albumname: string; photos: Photo[]; }) {
        if (!photoalbum.photographer) {
            throw new Error('Photographer is required but was not given.');
        }
        if (!photoalbum.photographedUser) {
            throw new Error('PhotographedUser is required but was not given.');
        }
        if (!photoalbum.albumname?.trim()) {
            throw new Error('Albumname is required but was not given.');
        }
        if (!Array.isArray(photoalbum.photos)) {
            throw new Error('Photos must be an array.');
        }
    }
    
    // GETTERS
    getId() {
        return this.id;
    }

    getPhotographer() {
        return this.photographer;
    }

    getPhotographedUser() {
        return this.photographedUser;
    }

    getAlbumName() {
        return this.albumname;
    }

    getPhotos() {
        return this.photos;
    }

    // SETTERS
    setId(id: number) {
        this.id = id;
    }

    setAlbumName(albumname: string) {
        this.albumname = albumname;
    }

    setPhotos(photos: Photo[]) {
        this.photos = photos;
    }

    setPhotographer(photographer: User) {
        this.photographer = photographer;
    }

    setPhotographedUser(photographedUser: User) {
        this.photographedUser = photographedUser;
    }

    addPhoto(photo: Photo) {
        this.photos.push(photo);
    }

    removePhoto(photo: Photo) {
        this.photos = this.photos.filter(p => p !== photo);
    }
}
