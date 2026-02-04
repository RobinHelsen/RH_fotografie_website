export type StatusMessage = {
  message: string;
  type: 'error' | 'success';
};

export enum Role {
  Photographer = "photographer",
  User = "user",
  Guest = "guest",
}

// ---------------------

// OUTPUT TYPES

export type User = {
  id: number,
  username: string,
  firstname: string,
  lastname: string,
  email: string,
  age: number,
  password: string,
  role: Role;
  alreadycustomer: boolean
};

export type Photo = {
  id: number;
  photoAlbumId: number;
  title: string;
  url: string;
  explanation: string;
  credits: string;
};

export type FotoAlbum = {
  id: number;
  photographer: User;
  photographedUser: User;
  albumname: string;
  photos: Photo[];
};

// INPUT TYPES

export type UserLoginInput = {
  username: string;
  password: string;
};