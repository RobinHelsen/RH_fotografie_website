import * as dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { expressjwt } from 'express-jwt';
import { userRouter } from './controller/user.routes';
import { photoRouter} from './controller/photo.router';
import { photoAlbumRouter } from './controller/photoalbumrouter';

const app = express();

dotenv.config();
const port = process.env.APP_PORT || 3000;

app.use(cors({ origin: 'http://localhost:8080' }));
app.use(bodyParser.json());

// Serve static files from the "images" directory
app.use('/images', express.static('images'));

app.use(
    expressjwt({
        secret: process.env.JWT_SECRET || 'default_secret',
        algorithms: ['HS256'],
    }).unless({
        path: [
            '/api-docs',
            /^\/api-docs\/.*/,
            '/users/login',
            '/users/signup',
            '/status',
            '/users',
        ],
    })
);

app.use('/users', userRouter);
app.use('/photo', photoRouter);
app.use('/photoalbums', photoAlbumRouter);

app.get('/status', (req, res) => {
    res.json({ message: 'Backend API is running...' });
});

const swaggerOpts = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Exam API',
            version: '1.0.0',
        },
    },
    apis: ['./controller/*.routes.ts'],
};
const swaggerSpec = swaggerJSDoc(swaggerOpts);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ status: 'unauthorized', message: err.message });
    } else if (err.name === 'ClassesError') {
        res.status(400).json({ status: 'domain error', message: err.message });
    } else {
        res.status(400).json({ status: 'application error', message: err.message });
    }
});

app.listen(port || 3000, () => {
    console.log(`Backend for fotoservice API is running... On port: ${port}.`);
});

