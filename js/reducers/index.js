import { combineReducers } from 'redux';
import Immutable, {List, Map} from 'immutable';
import { reducer as form } from 'redux-form/immutable';
import shortid from 'shortid';

//TODO: split reducers into separate files

const video = (state = Map(), action) => {
	switch (action.type) {
		case 'ADD_VIDEO':
			return Map({
				id: action.data.id,
				title: action.data.title,
				img: action.data.img,
				category: action.data.category
			});
		case 'UPDATE':
			if(state.get('id') === action.id){
				return state
					.set('title', action.data.title)
					.set('img', action.data.img)
					.set('category', action.data.category)
			}
			return state;
		default:
			return state;
	}
};

const videosById = (state = Map(), action) => {
	switch (action.type) {
		case 'ADD_VIDEO':
			return state.set(action.data.id, video(undefined, action));
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

const videosIds = (state = List(), action) => {
	switch (action.type) {
		case 'ADD_VIDEO':
			return state.push(action.data.id);
		case 'REMOVE':
			return state.filter((id) => {
				return action.id != id
			});
		case 'VIDEOS_LOADED':
			let ids  = Object.keys(action.videos);
			return state.merge(ids);
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


let categoriesInit = {
	"1": {id: 1, name: 'comedy'},
	"2": {id: 2, name: 'drama'},
	"3": {id: 3, name: 'thriller'},
	"4": {id: 4, name: 'documentary'}
};

const categoriesById = (state = Map(categoriesInit), action) => {
	//TODO: categories list modifications
	return state;
};


//selectors
export const getAllCategories = (state) => {
	let categoriesList = [];;
	state.categoriesById.map((category) => {
		categoriesList.push(category);
	});
	return categoriesList;
}

export const getAllVideos = (state) => {
	return state.videosIds.map(id => {
		return state.videosById.get(id);
	});
}

const videoApp = combineReducers({
	form,
	videosById,
	videosIds,
	common,
	categoriesById
});

export default videoApp;