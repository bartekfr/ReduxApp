import React, {PropTypes, Component} from 'react';
import Pagination from '../components/Pagination';
import {Link} from 'react-router';

const VideosList = ({pageVideos, currentCategory, allCategoryVideosSize, categoriesById}) => {
	let urlPrefix = `/browse/${currentCategory}`;
	return (
		<section className="videos-list-page">
			<h2>Your videos</h2>

			<ul className="videos-list row">
				{pageVideos.map(video => {
					let categoryId = video.get('category');
					let categoryName = categoriesById.get(categoryId).name;

					return (
							<li className="medium-6 columns" key={video.get('id')}>
								<section className="video-list-content">
									<span className="thumbnail-holder" href="#" data-src={video.get('img')}>
										<img className='img-responsive' src={video.get('img')} />
										<span className="category">{categoryName}</span>
									</span>
									<div className="video-content">
										<h3 className="title">{video.get('title')}</h3>
										<Link className="button small" to={'edit/' + video.get('id')}>Edit</Link>
									</div>
								</section>
							</li>
						)
					})
				}
			</ul>
			<Pagination videosSize={allCategoryVideosSize} urlPrefix={urlPrefix} />
		</section>
	)
};

export default VideosList;