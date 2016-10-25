import { combineReducers } from 'redux';
import Immutable, {List, Map} from 'immutable';
import { reducer as form } from 'redux-form/immutable';

//TODO: split reducers into separate files
const video = (state = Map(), action) => {
	switch (action.type) {
		case 'ADD_VIDEO':
			return Map({
				id: action.data.id,
				title: action.data.title,
				img: action.data.img
			});
		case 'UPDATE':
			if(state.get('id') === action.id){
				return state.set('title', action.data.title).set('img', action.data.img)
			}
			return state;
		default:
			return state;
	}
};

const videosList = (state = List(), action) => {
	switch (action.type) {
		case 'ADD_VIDEO':
			return state.push(video(undefined, action));
		case 'UPDATE':
			return state.map((item) => video(item, action));
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
	form,
	videosList,
	common
});

export default videoApp;