import { schema } from 'normalizr';

export const video = new schema.Entity('videos');
export const arrayOfVideos = new schema.Array(video);
