export type UserInput = {
    id?: number; // ID optional for input types
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
    id?: number; // ID optional for new photos
    photoAlbumId?: number; // Optional for photos not linked to an album
    title: string;
    url: string;
    explanation: string; // Fixed spelling
    credits: string;
};

export type PhotoAlbumInput = {
    id?: number; // Optional ID for input types
    photographerId: number; // Use IDs instead of full User object
    photographedUserId: number; // Use IDs instead of full User object
    albumname: string;
    photos?: PhotoInput[]; // Optional and aligned with `PhotoInput`
};

export type UserJWTInput = {
    id?: number;
    username?: string;
    password?: string;
    role?: Role;
};

export interface User {
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
    albumId?: number; // Matches `PhotoInput` structure
    title: string;
    url: string;
    explanation: string; // Fixed spelling
    credits: string;
}

export interface PhotoAlbum {
    id: number;
    photographer: User; // Full user object for the domain model
    photographedUser: User; // Full user object for the domain model
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
