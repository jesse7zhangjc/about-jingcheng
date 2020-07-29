export const getCorrectDevAssetsPath = (path: string) =>
  process.env.NODE_ENV === 'development'
    ? `${process.env.PUBLIC_URL}/${path}`
    : path;
