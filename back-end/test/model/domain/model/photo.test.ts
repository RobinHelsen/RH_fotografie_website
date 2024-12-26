import { Photos } from '../../../../model/photos';
//import { Role } from '../../../../types';

test('given: valid values, when: creating a photo, then: photo is created correctly', () => {
    // Given
    const validPhoto = new Photos({
        id: 1,
        albumId: 2,
        title: "Vacation",
        url: "https://example.com/photo.jpg",
        explenation: "Photo from vacation",
        credits: "John Doe",
    });

    // Then
    expect(validPhoto.getid()).toBe(1);
    expect(validPhoto.getalbumId()).toBe(2);
    expect(validPhoto.gettitle()).toBe("Vacation");
    expect(validPhoto.geturl()).toBe("https://example.com/photo.jpg");
    expect(validPhoto.getexplenation()).toBe("Photo from vacation");
    expect(validPhoto.getcredits()).toBe("John Doe");
});

test('given: a photo, when: updating photo properties, then: properties are updated correctly', () => {
    // Given
    const photo = new Photos({
        id: 1,
        albumId: 2,
        title: "Vacation",
        url: "https://example.com/photo.jpg",
        explenation: "Photo from vacation",
        credits: "John Doe",
    });

    // When
    photo.setid(3);
    photo.setalbumId(4);
    photo.settitle("Birthday Party");
    photo.seturl("https://example.com/birthday.jpg");
    photo.setexplenation("Photo from a birthday party");
    photo.setcredits("Jane Smith");

    // Then
    expect(photo.getid()).toBe(3);
    expect(photo.getalbumId()).toBe(4);
    expect(photo.gettitle()).toBe("Birthday Party");
    expect(photo.geturl()).toBe("https://example.com/birthday.jpg");
    expect(photo.getexplenation()).toBe("Photo from a birthday party");
    expect(photo.getcredits()).toBe("Jane Smith");
});
