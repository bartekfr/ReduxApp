import { combineReducers } from 'redux';
import Immutable, {List, Map} from 'immutable';
import { reducer as form } from 'redux-form/immutable';
import shortid from 'shortid';
import { common } from './common';
import { videosById, videosIds, categoriesById} from './videos';
export { getAllCategories, getAllVideos} from './videos';

const videoApp = combineReducers({
	form,
	videosById,
	videosIds,
	common,
	categoriesById
});

export default videoApp;