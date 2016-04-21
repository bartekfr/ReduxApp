import React, {PropTypes, Component} from 'react';
import Pagination from '../components/Pagination';
import {Link} from 'react-router';

const VideosList = ({videos, ...paginationProps}) => (
	<section className="videos-list-page">
		<h2>Your videos</h2>
		<ul className="videos-list row">
			{videos.map(video => {
				return <li className="medium-6 columns" key={video.get('id')}>
					<section className="video-list-content">
						<span className="thumbnail-holder" href="#" data-src={video.get('img')}>
							<img className='img-responsive' src={video.get('img')} />
						</span>
						<div className="video-content">
							<h3 className="title">{video.get('title')}</h3>
							<Link className="button small" to={'edit/' + video.get('id')}>Edit</Link>
						</div>
					</section>

					</li>
				})
			}
		</ul>
		<Pagination {...paginationProps} />
	</section>
);

export default VideosList;