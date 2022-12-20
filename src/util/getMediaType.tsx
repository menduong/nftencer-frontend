export const getMediaType = (src: string): 'image' | 'video' => {
  return ["jpg", "gif", "png", "webp", "jpeg"].includes(
    new URL(src).pathname.split(".")[1]
  )
    ? "image"
    : "video";
};
