import fetch from 'isomorphic-fetch'
import { normalize } from 'normalizr';
import { video, arrayOfVideos } from './schema';

export const add = (data) => ({
	type: 'ADD_VIDEO',
	data: normalize(data, video)
});

export const remove = (id) => ({
	type: 'REMOVE',
	id
});

export const update = (data) => ({
	type: 'UPDATE',
	data: normalize(data, video)
});

export const filterCategory = (category) => ({
	type: 'FILTER_CATEGORY',
	category
});

export const videosLoaded = (videos) => ({
	type: 'VIDEOS_LOADED',
	data: normalize(videos, arrayOfVideos)
});

export const videosLoad = () => ({
	type: 'VIDEOS_LOAD'
});

/* generic actions */
export const ajaxStart = () => ({
    type: 'AJAX_START',
});

export const ajaxEnd = () => ({
    type: 'AJAX_END',
});

export const ajaxError = (error) => ({
    type: 'AJAX_ERROR',
    error
});