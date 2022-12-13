export type UserType = 'Owner' | 'Creator';

export const VideoTypes = ['video/mp3', 'video/mp4', 'video'];
const VideoTypeConst = ['video/mp3', 'video/mp4', 'video'] as const;
export type VideoType = typeof VideoTypeConst[number];

const API_WALLET='https://deep-index.moralis.io/api/v2';

export const API_GET_NFT_WALLET=API_WALLET;
