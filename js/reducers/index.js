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

const videosPaginationCurrentPage = (state = 0, action) => {
	switch (action.type) {
		case 'SET_PAGE':
			return action.page;
		default:
			return state;
	}
};

let commonInit = {
  loading: false,
};

const common = (state = Map(commonInit), action) => {
  switch (action.type) {
    case 'AJAX_START':
      return state.set('loading', true);
    case 'AJAX_END':
      return state.set('loading', false);
    default:
      return state;
  }
};

const videoApp = combineReducers({
	videosList,
	common,
	videosPaginationCurrentPage,
	routing: routerReducer
});

export default videoApp;