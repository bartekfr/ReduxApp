import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import * as ACTIONS from './';

function loadVideos() {
	return fetch('js/data.json')
		.then(response => response.json())
}

function* fetchVideos(action) {
	yield put(ACTIONS.ajaxStart());

	try {
		const videos = yield call(loadVideos);
		yield put(ACTIONS.videosLoaded(videos));
		yield put(ACTIONS.ajaxEnd());
	} catch (e) {
		yield put(ACTIONS.ajaxError(e.message));
		yield put(ACTIONS.ajaxEnd());
	}
}

function* mySaga() {
	yield takeEvery('VIDEOS_LOAD', fetchVideos);
}

export default mySaga;