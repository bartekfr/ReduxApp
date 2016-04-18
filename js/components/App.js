import React, {Component} from 'react';
import AddVideo from '../containers/AddVideo';
import Videos from '../containers/VideosList';
import {Link} from 'react-router';

const App = (props) => (
	<div className="panel panel-default">
		<div className="panel-body">
			{props.children}
		</div>
		<nav className="panel-footer">
			<h3	className="sr-only">Footer navigation</h3>
			<ul className="nav nav-pills">
				<li role="presentation"><Link activeClassName="active" to={`/`}>All</Link></li>
				<li role="presentation"><Link to={`/add`}>Add new video</Link></li>
			</ul>
		</nav>
	</div>
);

export default App;