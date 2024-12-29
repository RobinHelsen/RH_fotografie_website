import { Photo as Photoprisma } from '@prisma/client';

export class Photo {
    private id: number;
    private photoAlbumId?: number; // Made optional
    private title: string;
    private url: string;
    private explanation: string;
    private credits: string;

    constructor(photo: { id: number; photoAlbumId?: number; title: string; url: string; explanation: string; credits: string; }) {
        this.validate(photo);

        this.id = photo.id;
        this.photoAlbumId = photo.photoAlbumId;
        this.title = photo.title;
        this.url = photo.url;
        this.explanation = photo.explanation;
        this.credits = photo.credits;
    }

    validate(photo: { id: number; photoAlbumId?: number; title: string; url: string; explanation: string; credits: string; }) {
        if (!photo.id) {
            throw new Error('ID is required but was not given.');
        }
        if (!photo.title?.trim()) {
            throw new Error('Title is required but was not given.');
        }
        if (!photo.url?.trim()) {
            throw new Error('Url is required but was not given.');
        }
        if (!photo.explanation?.trim()) {
            throw new Error('Explanation is required but was not given.');
        }
        if (!photo.credits?.trim()) {
            throw new Error('Credits are required but were not given.');
        }
    }

    equals(photo: Photo) {
        return (
            this.id === photo.getId() &&
            this.photoAlbumId === photo.getPhotoAlbumId() &&
            this.title === photo.getTitle() &&
            this.url === photo.getUrl() &&
            this.explanation === photo.getExplanation() &&
            this.credits === photo.getCredits()
        );
    }

    static from({ id, photoAlbumId, title, url, explanation, credits }: Photoprisma) {
        return new Photo({
            id,
            photoAlbumId,
            title,
            url,
            explanation,
            credits
        });
    }

    // GETTERS
    getId() {
        return this.id;
    }

    getPhotoAlbumId() {
        return this.photoAlbumId;
    }

    getTitle() {
        return this.title;
    }

    getUrl() {
        return this.url;
    }

    getExplanation() {
        return this.explanation;
    }

    getCredits() {
        return this.credits;
    }

    // SETTERS
    setId(id: number) {
        this.id = id;
    }

    setPhotoAlbumId(photoAlbumId: number | undefined) {
        this.photoAlbumId = photoAlbumId;
    }

    setTitle(title: string) {
        this.title = title;
    }

    setUrl(url: string) {
        this.url = url;
    }

    setExplanation(explanation: string) {
        this.explanation = explanation;
    }

    setCredits(credits: string) {
        this.credits = credits;
    }
}
