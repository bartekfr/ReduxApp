import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import VideosList from '../containers/VideosList';
import shortid from 'shortid';

const CategoryPicker = ({categories}) => {
	return (
		<div>
			<nav>
				<ul className="category-picker" >
					<li className="category" key={shortid.generate()}>
						<Link activeClassName='active' to='/browse/all'>all</Link>
					</li>
					{categories.map((v) => {
							return (
								<li className="category" key={v.id}>
									<Link activeClassName='active' to={'/browse/' + v.id}>{v.name}</Link>
								</li>
							)
						})
					}
				</ul>
			</nav>
			<VideosList />
		</div>
	)
};

export default CategoryPicker;