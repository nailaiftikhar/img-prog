import { Image } from '../models/image';

class ImgStorage {
  private images: Map<string, Image[]>;

  constructor() {
    this.images = new Map();
  }
}

export const imgStorage = new ImgStorage();
