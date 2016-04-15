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