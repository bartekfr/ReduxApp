import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import mySaga from './actions//saga'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	reducers,
	{},
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);

export default store;
