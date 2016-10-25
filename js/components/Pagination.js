import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';

const Pagination = ({videosSize, prefix}, {CONFIG}) => {
	var pages = [];
	var pagesCount = Math.ceil(videosSize / CONFIG.perPage);
	var show = pagesCount <= 1 ? false : true;

	for(var i = 0; i < pagesCount; i++ ) {
		let url = prefix + '/' + i;
		pages.push(<li key={i}><Link activeClassName='current' to={url}>{i + 1}</Link></li>);
	}
	return (
		<nav className={show ? 'pagination-wrapper' : 'pagination-wrapper hidden'}>
			<ul className="pagination" style={{overflow: 'hidden'}}>
				{pages}
			</ul>
		</nav>
	)
};

Pagination.contextTypes = {
  CONFIG: React.PropTypes.object
};


export default Pagination;