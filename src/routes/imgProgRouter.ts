import express from 'express';
import { imgProgController } from '../controllers/imgProgController';

const imgProgRouter = express.Router();

// Upload images with transformations
imgProgRouter.post('/upload', imgProgController.uploadImages);
// Retrieve images by ID
imgProgRouter.get('/retrieve/:imageId', imgProgController.retrieveImage);
// Retrieve all images
imgProgRouter.get('/retrieve', imgProgController.retrieveAllImages);

export default imgProgRouter;
