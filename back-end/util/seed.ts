import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const main = async () => {
    await prisma.user.deleteMany();

    const admin = await prisma.user.create({
        data: {
            username: 'adminFrank',
            firstname: 'FrankThe',
            lastname: 'Smith',
            email: 'franky@gmail.com',
            age: 25,
            password: await bcrypt.hash('admin', 12),
            role: 'admin',
            alreadycustomer: true,
        },
    });

    const user = await prisma.user.create({
        data: {
            username: 'userJhon',
            firstname: 'John',
            lastname: 'Doe',
            email: 'jonny@gmail.com',
            age: 25,
            password: await bcrypt.hash('user', 12),
            role: 'user',
            alreadycustomer: true,
        },
    });


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
