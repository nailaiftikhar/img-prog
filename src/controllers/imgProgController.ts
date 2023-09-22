import { Request, Response } from 'express';
import { Image } from '../models/image';
import { imgStorage } from '../storage/imgStorage';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs'; 
import path from 'path';

class ImgProgController { 
  uploadImages = (req: Request, res: Response): void => {
    // Upload images with transformations and store data in in-memory storage
  };

  
  retrieveImage(req: Request, res: Response): void {
    // Retrieve an image by ID
  }

  
  applyImageTransformations = (file: Express.Multer.File) : void => {
    // Simulate image transformations 
  }
}

export const imgProgController = new ImgProgController();
