import React, {Component} from 'react';
import {Link} from 'react-router';
import CONFIG  from '../const';

class App extends Component {
	constructor(props) {
		super(props);
		props.videosLoad();
	}
	getChildContext() {
		//pass global config via context (maybe it should be stored in store but I want to see how context works)
		return {
			CONFIG: CONFIG
		};
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
						<li><Link activeClassName="active" to={'/'}>Home</Link></li>
						<li><Link to={'/add'}>Add new video</Link></li>
					</ul>
				</nav>
			</div>
		);
	}
};

App.childContextTypes = {
  CONFIG: React.PropTypes.object
};

export default App;