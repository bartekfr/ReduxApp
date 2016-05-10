import { combineReducers } from 'redux';
import Immutable, {List, Map} from 'immutable';
import {routerReducer} from 'react-router-redux';

//TODO: split reducers into separate files
const videosList = (state = List(), action) => {
	switch (action.type) {
		case 'ADD_VIDEO':
			return state.push(Map({
				id: state.last().get('id') + 1,
				title: action.data.title,
				img: action.data.img
			}));
		case 'UPDATE':
			return state.map((video) => {
				if(action.id == video.get('id')){
					return video.set('title', action.data.title).set('img', action.data.img)
				}
				return video;
			});
		case 'REMOVE':
			return state.filter((video) => {
				return action.id != video.get('id')

			});
		case 'VIDEOS_LOADED':
			return state.merge(action.videos);
		default:
			return state;
	}
};

const loadingStatus = (state = Map({
	showLoader: false,
	error: ''
}), action) => {
	switch (action.type) {
		case 'VIDEOS_LOADED':
			return state.set('showLoader', false);
		case 'VIDEOS_LOADING':
			return state.set('showLoader', true);
		case 'VIDEOS_ERROR':
			return state.merge({
				'showLoader': false,
				'error': action.error.message
			});
		default:
			return state;
	}
};

const videosPaginationCurrentPage = (state = 0, action) => {
	switch (action.type) {
		case 'SET_PAGE':
			return action.page;
		default:
			return state;
	}
};


const videoApp = combineReducers({
	videosList,
	loadingStatus,
	videosPaginationCurrentPage,
	routing: routerReducer
});

export default videoApp;