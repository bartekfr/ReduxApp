import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';
import VideosList from '../containers/VideosList';

const CategoryPicker = ({categoryVideos, categories}) => {
	const categoriesList = ['all', ...categories.toJS()];

	return (
		<div>
			<nav>
				<ul className="category-picker" >
					{categoriesList.map((v) => {
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