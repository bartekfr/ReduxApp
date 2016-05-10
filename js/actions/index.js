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

export const videosLoading = () => {
	return {
		type: 'VIDEOS_LOADING'
	}
};

export const videosLoaded = (videos) => {
	return {
		type: 'VIDEOS_LOADED',
		videos
	}
};

export const videosError = (error) => {
	return {
		type: 'VIDEOS_ERROR',
		error
	}
};

export const videosLoad = () => {
	return dispatch => {
		dispatch(videosLoading());

		return fetch('/js/data.json')
			.then(response => response.json())
			.then(json => dispatch(videosLoaded(json)))
			.catch(err =>  dispatch(videosError(err)));
	}
};