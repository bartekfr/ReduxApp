import React, { PropTypes, Component } from 'react';

const Pagination = ({page,all, perPage, onPageClick}) => {
	var pages = [];
	var pagesCount = Math.ceil(all / perPage);
	var show = pagesCount <= 1 ? false : true;

	for(var i = 0; i < pagesCount; i++ ) {
		let active = page  == i ? true : false;
		pages.push(<li className={active ? 'active' : ''} key={i}><a href="#" onClick={onPageClick.bind(this, i)}>{i + 1}</a></li>);

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