import { Photos } from '../model/photos';
import { User } from '../model/user';
import { Role } from '../types';

export class PhotoAlbum {
    private id: number;
    private photographer: User;
    private photographedUser: User;
    private albumname: string;
    private photos: Photos[];

    constructor({
        id,
        photographer,
        photographedUser,
        albumname,
        photos,
    }: {
        id: number;
        photographer: User;
        photographedUser: User;
        albumname: string;
        photos: Photos[];
    }) {
        this.id = id;
        this.photographer = photographer;
        this.photographedUser = photographedUser;
        this.albumname = albumname;
        this.photos = photos;
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

    setPhotos(photos: Photos[]) {
        this.photos = photos;
    }

    setPhotographer(photographer: User) {
        this.photographer = photographer;
    }

    setPhotographedUser(photographedUser: User) {
        this.photographedUser = photographedUser;
    }

    addPhoto(photo: Photos) {
        this.photos.push(photo);
    }

    removePhoto(photo: Photos) {
        this.photos = this.photos.filter(p => p !== photo);
    }
}
