import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const main = async () => {
    // Clear existing data
    await prisma.photo.deleteMany();
    await prisma.photoAlbum.deleteMany();
    await prisma.user.deleteMany();
    console.log('Existing data cleared.');

    // Seed users
    const admin = {
        username: 'adminFrank',
        firstname: 'FrankThe',
        lastname: 'Smith',
        email: 'franky@gmail.com',
        age: 25,
        password: await bcrypt.hash('admin', 12),
        role: 'admin',
        alreadycustomer: true,
    };

    const user = {
        username: 'userJhon',
        firstname: 'John',
        lastname: 'Doe',
        email: 'jonny@gmail.com',
        age: 25,
        password: await bcrypt.hash('user', 12),
        role: 'user',
        alreadycustomer: true,
    };

    console.log('Seeding users...');
    const adminUser = await prisma.user.create({ data: admin });
    console.log('Admin user created.');
    const regularUser = await prisma.user.create({ data: user });
    console.log('Regular user created.');

    // Seed photo albums
    const albums = [
        {
            photographerId: adminUser.id,
            photographedUserId: regularUser.id,
            albumname: 'Nature Collection',
        },
        {
            photographerId: adminUser.id,
            photographedUserId: regularUser.id,
            albumname: 'Urban Landscapes',
        },
        {
            photographerId: adminUser.id,
            photographedUserId: regularUser.id,
            albumname: 'Ocean Views',
        },
    ];

    console.log('Seeding photo albums...');
    const photoAlbums = [];
    for (const album of albums) {
        const createdAlbum = await prisma.photoAlbum.create({ data: album });
        photoAlbums.push(createdAlbum);
        console.log(`Photo album created: ${album.albumname}`);
    }

    // Seed photos
    const photos = [
        {
            photoAlbumId: photoAlbums[0]?.id, // Nature Collection
            title: 'Sunset in the Mountains',
            url: 'https://example.com/photos/sunset-mountains.jpg',
            explanation: 'A beautiful sunset captured in the mountain ranges.',
            credits: 'John Doe',
        },
        {
            photoAlbumId: photoAlbums[0]?.id, // Nature Collection
            title: 'Forest Trail',
            url: 'https://example.com/photos/forest-trail.jpg',
            explanation: 'A serene trail through the dense forest.',
            credits: 'Jane Smith',
        },
        {
            photoAlbumId: photoAlbums[1]?.id, // Urban Landscapes
            title: 'City Lights',
            url: 'https://example.com/photos/city-lights.jpg',
            explanation: 'A mesmerizing view of city lights at night.',
            credits: 'Sam Taylor',
        },
        {
            photoAlbumId: null, // No album
            title: 'Ocean Waves',
            url: 'https://example.com/photos/ocean-waves.jpg',
            explanation: 'Waves crashing onto the sandy shore.',
            credits: 'Chris Johnson',
        },
    ];

    console.log('Seeding photos...');
    for (const photo of photos) {
        await prisma.photo.create({ data: photo });
        console.log(`Photo created: ${photo.title}`);
    }

    console.log('Seeding completed.');
};

(async () => {
    try {
        await main();
        await prisma.$disconnect();
    } catch (error) {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    }
})();
