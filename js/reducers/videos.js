import { combineReducers } from 'redux';
import Immutable, {List, Map} from 'immutable';
import { reducer as form } from 'redux-form/immutable';
import shortid from 'shortid';
import { common } from './common';

export const videosById = (state = Map(), action) => {
	switch (action.type) {
		case 'ADD_VIDEO':
		case 'UPDATE':
			return state.merge(action.data.entities.videos);
		case 'REMOVE':
			return state.delete(action.id)
		case 'VIDEOS_LOADED':
			return state.merge(action.data.entities.videos);
		default:
			return state;
	}
};

export const videosIds = (state = List(), action) => {
	switch (action.type) {
		case 'ADD_VIDEO':
			return state.push(action.data.result);
		case 'REMOVE':
			return state.filter((id) => id !== action.id)
		case 'VIDEOS_LOADED':
			return state.merge(action.data.result);
		default:
			return state;
	}
};

let categoriesInit = {
	"1": {id: 1, name: 'comedy'},
	"2": {id: 2, name: 'drama'},
	"3": {id: 3, name: 'thriller'},
	"4": {id: 4, name: 'documentary'}
};


// selectors
// TODO: move to separate module and consider using Reselect
export const categoriesById = (state = Map(categoriesInit), action) => {
	//TODO: categories list modifications
	return state;
};

export const getAllCategories = (state) => {
	return state.categoriesById.toArray();
};

export const getAllVideos = (state) => {
	return state.videosIds.map(id => {
		return state.videosById.get(id);
	});
};