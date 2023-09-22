import { Request, Response } from 'express';
import { imgProgController } from '../../src/controllers/imgProgController';

type File = Express.Multer.File;
describe('ImgProgController', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it('should upload images and return a response', async () => {
    const imageBuffer1 = Buffer.from('../../test/data/images/test-img-1.jpg');
    const imageBuffer2 = Buffer.from('../../test/data/images/test-img-2.jpg');

    // Create a mock request with file buffers
    req.files = [
      {
        fieldname: 'files',
        originalname: 'test-img-1.jpg',
        encoding: '7bit',
        mimetype: 'image/jpeg',
        size: imageBuffer1.length,
        buffer: imageBuffer1,
      },
      {
        fieldname: 'files',
        originalname: 'test-img-2.png',
        encoding: '7bit',
        mimetype: 'image/png',
        size: imageBuffer2.length,
        buffer: imageBuffer2,
      },
    ] as unknown as File[];


    await imgProgController.uploadImages(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.any(Array));
  });

  it('should retrieve all uploaded images', () => {
    imgProgController.retrieveAllImages(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.any(Array));
    expect((res.json as jest.Mock).mock.calls[0][0]).toHaveLength(2);
  });

  it('should give not found error for non-existent image', () => {
    const imageId = 'baa08cfa-4f4a-4b6b-9fdb-833ac47dd684';

    req.params = { imageId };

    imgProgController.retrieveImage(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'Image not found' });
  });

  // other tests to follow

  afterEach(() => {
    jest.clearAllMocks();
  });
});
