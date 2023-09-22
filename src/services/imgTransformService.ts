import sharp from 'sharp';
import {
  ImgCompressOptions, ImgRotationOptions, ImgThumbnailOptions, TransformationFeatures,
  TransformationKey, TransformationOptions
} from '../types/imgProgTypes';

class ImageTransformService {
  private transformationFunctions: Record<string, (buffer: Buffer, options: TransformationOptions) => Promise<Buffer>> = {
    compression: this.compressImage.bind(this),
    thumbnail: this.createThumbnail.bind(this),
    rotate: this.rotateImage.bind(this),
    // Add more transformations here
  };

  async applyImageTransformations(buffer: Buffer, transformations: TransformationFeatures): Promise<Buffer> {
    let transformedBuffer = buffer;

    for (const key in transformations) {
      if (key in this.transformationFunctions) {
        const transformationKey = key as TransformationKey;
        const options = transformations[transformationKey];
        transformedBuffer = await this.transformationFunctions[key](transformedBuffer, options);
      }
    }

    return transformedBuffer;
  }

  async compressImage(buffer: Buffer, options: TransformationOptions): Promise<Buffer> {
    const { quality } = options as ImgCompressOptions;
    const compressedBuffer = await sharp(buffer).jpeg({ quality }).toBuffer();
    console.log("Compression Applied on Image");
    return compressedBuffer;
  }

  async rotateImage(buffer: Buffer, options: TransformationOptions): Promise<Buffer> {
    const { angle } = options as ImgRotationOptions;
    const rotatedBuffer = await sharp(buffer).rotate(angle).toBuffer();
    console.log("Rotation Applied on Image");
    return rotatedBuffer;
  }

  async createThumbnail(buffer: Buffer, options: TransformationOptions): Promise<Buffer> {
    const { width, height } = options as ImgThumbnailOptions;
    const thumbnailBuffer = await sharp(buffer).resize({ width, height }).toBuffer();
    console.log("Thumbnail created for Image");
    return thumbnailBuffer;
  }
}

export const imageTransformService = new ImageTransformService();
