import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';
import VideosList from '../containers/VideosList';

const CategoryPicker = ({categoryVideos, params, location}) => {
	let categories = ['all', 'comedy', 'drama', 'thriller', 'documentary'];
	let category = params.category || 'all';
	let page =  params.page;

	return (
		<div>
			<nav>
				<ul className="category-picker" >
					{categories.map((v) => {
							let className = v === category ? 'active' : '';
							return (
								<li key={v} className={className}>
									<Link activeClassName='active' to={'/browse/' + v}>{v}</Link>
								</li>
							)
						})
					}
				</ul>
			</nav>
			<VideosList categoryVideos={categoryVideos} page={page} category={category}/>
		</div>
	)
};

export default CategoryPicker;