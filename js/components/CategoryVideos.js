import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';
import VideosList from '../containers/VideosList';

const CategoryPicker = ({filterCategory, categoryVideos, params, category}) => {
	let categories = ['all', 'comedy', 'drama', 'thriller', 'documentary'];

	return (
		<div>
			<nav>
				<ul className="category-picker" >
					{categories.map((v) => {
							let className = v === category ? 'active' : '';
							return (
								<li key={v} className={className} onClick={() => (filterCategory(v))}>
									<a href="#">{v}</a>
								</li>
							)
						})
					}
				</ul>
			</nav>
			<VideosList videos={categoryVideos} page={params.page} />
		</div>
	)
};

export default CategoryPicker;