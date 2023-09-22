import { Request, Response } from 'express';
import { Image } from '../models/image';
import { imgStorage } from '../storage/imgStorage';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';
import { imageTransformService } from '../services/imgTransformService';
import { TransformationFeatures } from '../types/imgProgTypes';

class ImgProgController {

  uploadImages = async (req: Request, res: Response): Promise<void> => {
    try {
      const uploadedImages: Express.Multer.File[] = req.files as Express.Multer.File[];
      const transformations: TransformationFeatures = JSON.parse(req.body.transformations || '{}');;
      const images: Image[] = [];

      for (const file of uploadedImages) {
        const imageId = uuidv4();
        const uniqueFilename = `${imageId}_${file.originalname}`;
        const transformedImageBuffer = await imageTransformService.applyImageTransformations(file.buffer, transformations);
        const directoryPath = path.join(__dirname, '..', 'uploads');
        const filePath = path.join(directoryPath, uniqueFilename);
        await fs.promises.mkdir(directoryPath, { recursive: true });

        fs.writeFileSync(filePath, transformedImageBuffer);

        const image: Image = {
          id: imageId,
          filename: uniqueFilename,
          url: `/uploads/${uniqueFilename}`,
        };

        images.push(image);
      }

      imgStorage.saveImages(images);

      res.status(201).json(images);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  retrieveImage(req: Request, res: Response): void {
    const imageId = req.params.imageId;
    const images = imgStorage.getImages(imageId);

    if (images && images.length > 0) {
      res.json(images);
    } else {
      res.status(404).json({ error: 'Image not found' });
    }
  }
}

export const imgProgController = new ImgProgController();
