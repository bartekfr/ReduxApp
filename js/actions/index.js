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

export const filterCategory = (category) => {
	return {
		type: 'FILTER_CATEGORY',
		category
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

export const videosLoad = () => {
	return dispatch => {
		dispatch(ajaxStart());

		return fetch('/js/data.json')
			.then(response => response.json())
			.then(json => {
				dispatch(videosLoaded(json));
				dispatch(ajaxEnd())
			})
			.catch(err =>  dispatch(ajaxError(err)));
	}
};

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