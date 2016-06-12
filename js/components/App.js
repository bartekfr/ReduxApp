import React, {Component} from 'react';
import {Link} from 'react-router';

class App extends Component {
	constructor(props) {
		super(props);
		props.videosLoad();
	}
	render() {
		let ajaxLoader = '';
		if (this.props.loadingStatus) {
			ajaxLoader = <h3>Loading...</h3>;
		}

		return (
			<div className="panel panel-default">
				{ajaxLoader}
				<div className="panel-body">
					{this.props.children}
				</div>
				<nav className="panel-footer">
					<ul className="menu">
						<li><Link activeClassName="active" to={'/'}>All</Link></li>
						<li><Link to={'/add'}>Add new video</Link></li>
					</ul>
				</nav>
			</div>
		);
	}
};

export default App;