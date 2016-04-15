import { combineReducers } from 'redux';
import Immutable, {List, Map} from 'immutable';
import { routerReducer } from 'react-router-redux';

var initData = [
	{id: 0, title: 'The very very long story to be told soon', img: 'http://bfryzowicz.pl/img/mirror.jpg'},
	{id: 1, title: 'Hobbit', img: 'http://bfryzowicz.pl/img/flower.jpg'},
	{id: 2, title: 'Lord of the rings', img: 'http://bfryzowicz.pl/img/korony.jpg'},
	{id: 3, title: 'Terminator 21', img: 'http://bfryzowicz.pl/img/mirror.jpg'},
	{id: 4, title: 'The Big bang theory', img: 'http://bfryzowicz.pl/img/flower.jpg'},
	{id: 5, title: 'Harry Potter', img: 'http://bfryzowicz.pl/img/mirror.jpg'},
	{id: 6, title: 'Start Wars', img: 'http://bfryzowicz.pl/img/mirror.jpg'}
];

var initVideosState = Immutable.fromJS(initData);

//TODO: spli to separate files
const videos = (state =  initVideosState, action) => {
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
		default:
			return state;
	}
};

const pagination = (state = 0, action) => {
	switch (action.type) {
		case 'SET_PAGE':
			return action.page;
		default:
			return state;
	}
};


const videoApp = combineReducers({
	videos,
	pagination,
	routing: routerReducer
});

export default videoApp;