import { Image } from '../models/image';

class ImgStorage {
  private images: Map<string, Image[]>;

  constructor() {
    this.images = new Map();
  }

  saveImages(images: Image[]): void {
    for (const image of images) {
      if (!this.images.has(image.id)) {
        this.images.set(image.id, []);
      }
      this.images.get(image.id)?.push(image);
    }
  }

  getImages(imageId: string): Image[] | undefined {
    return this.images.get(imageId);
  }

  getAllImages(): Map<string, Image[]> {
    return this.images;
  }
}

export const imgStorage = new ImgStorage();
