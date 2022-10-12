export const getMediaType = (src: string): 'image' | 'video' => {
  return ['jpg', 'gif', 'png', 'webp'].includes(new URL(src).pathname.split('.')[1]) ? 'image' : 'video';
};
