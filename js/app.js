import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import reducers from './reducers';
import { Router, Route, hashHistory, IndexRoute  } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

//Components
import App from './components/App';
import Videos from './containers/VideosList';
import Add from './containers/AddVideo';
import Edit from './containers/EditVideo';

import css from "../sass/main.scss";

const store = createStore(reducers);
const history = syncHistoryWithStore(hashHistory, store);

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Videos} />
				<Route path="add" component={Add} />
				<Route path="edit/:id" component={Edit} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);


//TODO: should be in module
$(document).on('click', '.thumbnail-holder', function (e) {
	var $this = $(this);
	var src =  $this.data('src');
	var img = `<img class="img-responsive" src=${src} />`;

 	$('.modal-content').html(img);
});

