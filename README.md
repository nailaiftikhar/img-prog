# img-prog
A minimum viable product (MVP) of a service with the following features:
1. Image Upload:
  * The service have an endpoint that accepts image uploads.
  * On successful upload, returns a unique identifier for that image, which can be used for later retrieval.
  * Every upload operation support Transformations that can be applied before images are saved.
  * The upload operations allow providing images in bulk
2. Image Retrieval:
  * An endpoint to retrieve previously uploaded images.
