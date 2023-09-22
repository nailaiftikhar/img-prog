# img-prog
## Specifications
A minimum viable product (MVP) of a service with the following features:
1. Image Upload:
  * The service have an endpoint that accepts image uploads.
  * On successful upload, returns a unique identifier for that image, which can be used for later retrieval.
  * Every upload operation support Transformations that can be applied before images are saved.
  * The upload operations allow providing images in bulk
2. Image Retrieval:
  * An endpoint to retrieve previously uploaded images.

## Pre-requisites
- Node.js 
- npm (Node Package Manager)

## Steps to run
- Clone the repository
- Run `npm i`
- Run `npm run dev`
The service should now be running at `http://localhost:3000`. There is an upload and retrieve demo on the specified url. Can be tested via UI as well.
![Frontend sample](image.png)

## API Endpoints
### Upload (Bulk) Images with transformation
- POST `/api/img-prog/upload`
- Upload one or more images with optional transformations. Example request:
```
{
  "transformations": {
    "compression": { "quality": 80 },
    "thumbnail": { "width": 200, "height": 200 }
  }
}

```
![Postman post request sample screenshot](image-1.png)

### Retrieve All Images
- GET `/api/img-prog/retrieve``
- Retrieve a list of all uploaded images.

### Retrieve Image by ID
- GET /api/img-prog/retrieve/:imageId
- Retrieve a specific uploaded image by its unique ID.

## Testing
To run tests, use the following command:
`npm run test`

![Run tests output](image-2.png)
## Future Enhancements

While the Image Prog MVP is functional, there are several areas for potential future enhancements and improvements:

1. **Validation and Error Handling**: Enhance validation and error handling for better user experience. Provide clear error messages and validation for image types and sizes.

2. **Image Transformation Options**: Expand the available image transformation options. Allow users to apply more advanced transformations such as watermarking, resizing to specific dimensions, or applying filters. Also using some advanced packages or services for transformations.

3. **Storage and Scaling**: Implement a scalable storage solution pr database for uploaded images. Consider using cloud storage services like Amazon S3 or Google Cloud Storage to handle larger volumes of images.

4. **API Documentation**: Generate API documentation using tools like Swagger to make it easier for developers to understand and use the service.

5. **User Interface**: Develop a user-friendly web interface that allows users to interact with the service without using external tools like Postman.

6. **Testing Automation**: Expand the test suite with automated integration and end-to-end tests to ensure the reliability of the service.