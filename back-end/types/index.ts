export type UserInput = {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    age: number;
    password: string;
    role: Role;
    alreadycustomer: boolean;
};

export type PhotoInput = {
    id: number;
    photoAlbumId: number;
    title: string;
    url: string;
    explanation: string;
    credits: string;
};

export type PhotoAlbumInput = {
    id: number;
    photographer: User;
    photographedUser: User;
    albumname: string;
    photos: Photo[];
};

export type UserJWTInput = {
    id?: number;
    username?: string;
    password?: string;
    role?: Role;
};

interface User {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    age: number;
    password: string;
    role: Role;
    alreadycustomer: boolean;
}

export interface Photo {
    id: number;
    albumId: number;
    title: string;
    url: string;
    explenation: string;
    credits: string;
}

export interface PhotoAlbum {
    id: number;
    photographer: User;
    photographedUser: User;
    albumname: string;
    photos: Photo[];
}
export interface PhotoAlbumType {
    id: number;
    photographer: User;
    photographedUser: User;
    albumname: string;
    photos: Photo[];
}

export type AuthenticationResponse = {
    token: string;
    username: string;
    role: string;
};

export enum Role {
    Photographer = "photographer",
    User = "user",
    Guest = "guest",
}
