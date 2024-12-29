import { Photo } from '../../../../model/photo';
//import { Role } from '../../../../types';

test('given: valid values, when: creating a photo, then: photo is created correctly', () => {
    // Given
    const validPhoto = new Photo({
        id: 1,
        photoAlbumId: 2,
        title: "Vacation",
        url: "https://example.com/photo.jpg",
        explanation: "Photo from vacation",
        credits: "John Doe",
    });

    // Then
    expect(validPhoto.getId()).toBe(1);
    expect(validPhoto.getPhotoAlbumId()).toBe(2);
    expect(validPhoto.getTitle()).toBe("Vacation");
    expect(validPhoto.getUrl()).toBe("https://example.com/photo.jpg");
    expect(validPhoto.getExplanation()).toBe("Photo from vacation");
    expect(validPhoto.getCredits()).toBe("John Doe");
});

test('given: a photo, when: updating photo properties, then: properties are updated correctly', () => {
    // Given
    const photo = new Photo({
        id: 1,
        photoAlbumId: 2,
        title: "Vacation",
        url: "https://example.com/photo.jpg",
        explanation: "Photo from vacation",
        credits: "John Doe",
    });

    // When
    photo.setId(3);
    photo.setPhotoAlbumId(4);
    photo.setTitle("Birthday Party");
    photo.setUrl("https://example.com/birthday.jpg");
    photo.setExplanation("Photo from a birthday party");
    photo.setCredits("Jane Smith");

    // Then
    expect(photo.getId()).toBe(3);
    expect(photo.getPhotoAlbumId()).toBe(4);
    expect(photo.getTitle()).toBe("Birthday Party");
    expect(photo.getUrl()).toBe("https://example.com/birthday.jpg");
    expect(photo.getExplanation()).toBe("Photo from a birthday party");
    expect(photo.getCredits()).toBe("Jane Smith");
});
