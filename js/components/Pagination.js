import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';

const Pagination = ({page, all, perPage, params}) => {
	var pages = [];
	var pagesCount = Math.ceil(all / perPage);
	var show = pagesCount <= 1 ? false : true;

	for(var i = 0; i < pagesCount; i++ ) {
		let active = page  == i ? true : false;
		pages.push(<li key={i}><Link activeClassName='current' to={'videos/' + i}>{i + 1}</Link></li>);

	}
	return (
		<nav className={show ? 'pagination-wrapper' : 'pagination-wrapper hidden'}>
			<ul className="pagination" style={{overflow: 'hidden'}}>
				{pages}
			</ul>
		</nav>
	)
};

export default Pagination;