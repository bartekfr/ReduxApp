import React, {PropTypes, Component} from 'react';
import Pagination from '../components/Pagination';
import {Link} from 'react-router';

const VideosList = ({videos, ...paginationProps}) => (
	<section className="videos-list-page">
		<h2>Your videos</h2>
		<ul className="videos-list">
			{videos.map(video => {
				return <li className="" key={video.get('id')}>
					<section>
						<span className="thumbnail-holder" href="#" data-toggle="modal"  data-target="#modal-content" data-src={video.get('img')}>
							<img className='img-responsive' src={video.get('img')} />
						</span>
						<div className="video-content">
							<h3 className="title">{video.get('title')}</h3>
							<Link className="btn btn-default btn-sm" to={'edit/' + video.get('id')}>Edit</Link>
						</div>
					</section>

					</li>
				})
			}
		</ul>
		<Pagination {...paginationProps} />
		{/* Modal template*/}
		<div id="modal-content" className="modal bs-example-modal-lg">
			<div className="modal-dialog modal-lg" role="document">
				<div className="modal-content">
					<div className="modal-body">
					</div>
				</div>
			</div>
	</div>
	</section>
);

export default VideosList;