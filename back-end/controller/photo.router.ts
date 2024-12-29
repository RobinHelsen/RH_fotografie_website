import express, {NextFunction, Request, Response} from 'express';
import photoService from '../service/photo.service';
import { PhotoInput } from '../types/index';

const photoRouter = express.Router();

photoRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const photos = await photoService.getAllPhotos();
        res.status(200).json(photos);
    } catch (error) {
        next(error);
    }
});

photoRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const photoInput = <PhotoInput>req.body;
        const photo = await photoService.createPhoto(photoInput);
        res.status(201).json(photo);
    } catch (error) {
        next(error);
    }
});

export { photoRouter };