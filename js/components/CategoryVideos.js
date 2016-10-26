import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';
import VideosList from '../containers/VideosList';

const CategoryPicker = ({categoryVideos}) => {
	let categories = ['all', 'comedy', 'drama', 'thriller', 'documentary'];

	return (
		<div>
			<nav>
				<ul className="category-picker" >
					{categories.map((v) => {
							return (
								<li key={v}>
									<Link activeClassName='active' to={'/browse/' + v}>{v}</Link>
								</li>
							)
						})
					}
				</ul>
			</nav>
			<VideosList categoryVideos={categoryVideos} />
		</div>
	)
};

export default CategoryPicker;