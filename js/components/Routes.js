import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import React from 'react';

//Components
import App from '../containers/App';
import CategoryVideos from '../containers/CategoryVideos';
import Add from '../containers/AddVideo';
import Edit from '../containers/EditVideo';

const routing = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={CategoryVideos}  />
			<Route path="/browse/:category" component={CategoryVideos} >
				<Route path=":page" component={CategoryVideos} />
			</Route>
			<Route path="add" component={Add} />
			<Route path="edit/:id" component={Edit} />
		</Route>
	</Router>
);

export default routing;

