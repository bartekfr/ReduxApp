import fetch from 'isomorphic-fetch'

export const add = (data) => {
	return {
		type: 'ADD_VIDEO',
		data
	}
};

export const remove = (id) => {
	return {
		type: 'REMOVE',
		id
	}
};

export const update = (id, data) => {
	return {
		type: 'UPDATE',
		id,
		data
	}
};

export const setPage = (page) => {
	return {
		type: 'SET_PAGE',
		page
	}
};

export const videosLoaded = (videos) => {
	return {
		type: 'VIDEOS_LOADED',
		videos
	}
};

//TODO: add error handling
export const loadVideos = () => {
	return dispatch => {
		return fetch('/js/data.json')
			.then(response => response.json())
			.then(json => dispatch(videosLoaded(json)))
	}
};