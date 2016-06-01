import React, {Component} from 'react';
import {Link} from 'react-router';

const App = (props) => (
	<div className="panel panel-default">
		<div className="panel-body">
			{props.children}
		</div>
		<nav className="panel-footer">
			<ul className="menu">
				<li><Link activeClassName="active" to={`/`}>All</Link></li>
				<li><Link to={`/add`}>Add new video</Link></li>
			</ul>
		</nav>
	</div>
);

export default App;