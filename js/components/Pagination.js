import React, { PropTypes, Component } from 'react';

class Pagination extends Component {
	render() {
		var pages = [];
		var pagesCount = Math.ceil(this.props.all / this.props.perPage);
		var show = pagesCount <= 1 ? false : true;

		for(var i = 0; i < pagesCount; i++ ) {
			let active = this.props.page  == i ? true : false;
			pages.push(<li className={active ? 'active' : ''} key={i}><a href="#" onClick={this.props.onPageClick.bind(this, i)}>{i + 1}</a></li>);

		}
		return (
			<nav className={show ? 'pagination-wrapper' : 'pagination-wrapper hidden'}>
				<ul className="pagination" style={{overflow: 'hidden'}}>
					{pages}
				</ul>
			</nav>
		)
	}
};

export default Pagination;