import { Photo } from '../model/photo';
import { User } from '../model/user';
import { PhotoAlbum as PhotoAlbumPrisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
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

    static async from(photoAlbumPrisma: PhotoAlbumPrisma): Promise<PhotoAlbum> {
        const { id, photographerId, photographedUserId, albumname } = photoAlbumPrisma;
    
        // Fetch related entities
        const [photographer, photographedUser] = await Promise.all([
            prisma.user.findUnique({ where: { id: photographerId } }),
            prisma.user.findUnique({ where: { id: photographedUserId } }),
        ]);
    
        if (!photographer) {
            throw new Error(`Photographer with ID ${photographerId} not found.`);
        }
        if (!photographedUser) {
            throw new Error(`Photographed User with ID ${photographedUserId} not found.`);
        }
    
        // Fetch photos associated with the album
        const photos = await prisma.photo.findMany({ where: { photoAlbumId: id } });
    
        // Map raw Prisma data to model classes
        return new PhotoAlbum({
            id,
            photographer: User.from(photographer), // Transform raw user data into User instance
            photographedUser: User.from(photographedUser), // Transform raw user data into User instance
            albumname,
            photos: photos.map(photo => Photo.from(photo)), // Transform raw photos into Photo instances
        });
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
