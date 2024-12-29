import express, {NextFunction, Request, Response} from 'express';
import photoAlbumService from '../service/photoalbum.service';
import { PhotoAlbumInput } from '../types/index';

const photoAlbumRouter = express.Router();

photoAlbumRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const photoAlbums = await photoAlbumService.getAllPhotoAlbums();
        res.status(200).json(photoAlbums);
    } catch (error) {
        next(error);
    }
});

export { photoAlbumRouter };

