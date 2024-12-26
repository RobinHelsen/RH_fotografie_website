import { PhotoAlbum } from '../../../../model/photoalbum';
import { User } from '../../../../model/user';
import { Role } from '../../../../types';
import { Photos } from '../../../../model/photos';

test('given: valid values for photoalbum, when: creating a photoalbum, then: photoalbum is being created', () => {
    // Given
    const validPhotographer = new User({
        id: 1,
        username: "frankysmith",
        firstname: "frank",
        lastname: "smith",
        email: "franky@gmail.com",
        age: 25,
        password: "password123",
        role: Role.User,
        alreadycustomer: true,
    });
    const validPhotographedUser = new User({
        id: 2,
        username: "janedoe",
        firstname: "jane",
        lastname: "doe",
        email: "jane@gmail.com",
        age: 30,
        password: "password456",
        role: Role.User,
        alreadycustomer: false,
    });

    const validPhoto = new Photos({
        id: 1,
        albumId: 1,
        title: "Family",
        url: "www.photo.com",
        explenation: "Family photo",
        credits: "Family",
    });    

    // When
    const validPhotoAlbum = new PhotoAlbum({
        id: 1,
        photographer: validPhotographer,
        photographedUser: validPhotographedUser,
        albumname: "Family Memories",
        photos: [validPhoto],
    });

    // Then
    expect(validPhotoAlbum.getId()).toBe(1);
    expect(validPhotoAlbum.getPhotographer()).toBe(validPhotographer);
    expect(validPhotoAlbum.getPhotographedUser()).toBe(validPhotographedUser);
    expect(validPhotoAlbum.getAlbumName()).toBe("Family Memories");
    expect(validPhotoAlbum.getPhotos()).toEqual([validPhoto]);
});


