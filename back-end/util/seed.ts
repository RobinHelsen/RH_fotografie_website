import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const main = async () => {
    await prisma.user.deleteMany();
    await prisma.photo.deleteMany();
    console.log('Existing data cleared.');

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
    await prisma.user.create({ data: admin });
    console.log('Admin user created.');
    await prisma.user.create({ data: user });
    console.log('Regular user created.');

    const photos = [
        {
            photoAlbumId: 1,
            title: 'Sunset in the Mountains',
            url: 'https://example.com/photos/sunset-mountains.jpg',
            explanation: 'A beautiful sunset captured in the mountain ranges.',
            credits: 'John Doe',
        },
        {
            photoAlbumId: 1,
            title: 'Forest Trail',
            url: 'https://example.com/photos/forest-trail.jpg',
            explanation: 'A serene trail through the dense forest.',
            credits: 'Jane Smith',
        },
        {
            photoAlbumId: 2,
            title: 'City Lights',
            url: 'https://example.com/photos/city-lights.jpg',
            explanation: 'A mesmerizing view of city lights at night.',
            credits: 'Sam Taylor',
        },
        {
            photoAlbumId: 3,
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

