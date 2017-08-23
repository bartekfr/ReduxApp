import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import mySaga from './actions//saga'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	reducers,
	{},
	composeEnhancers(
		applyMiddleware(sagaMiddleware)
	)
);

sagaMiddleware.run(mySaga);

export default store;
