export type ImgCompressOptions = {
  quality :number,
  // other options 
}

export type ImgThumbnailOptions = {
  width :number,
  height: number
  // other options 
}

export type ImgRotationOptions = {
  angle :number,
  // other options 
}

export type TransformationKey = 'compression' | 'thumbnail' | 'rotate'
export type TransformationOptions = ImgRotationOptions | ImgThumbnailOptions | ImgCompressOptions

export type TransformationFeatures = {
  [key in TransformationKey]: TransformationOptions
}