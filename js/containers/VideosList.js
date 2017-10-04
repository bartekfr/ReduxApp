import {connect} from 'react-redux';
import List from '../components/VideosList';
import pagination from '../components/Pagination';
import CONFIG  from '../const';
import { createSelector } from 'reselect';
import { withRouter } from 'react-router';
import { getAllVideos } from '../reducers';
const perPage = CONFIG.perPage;

//Selectors
const getPage = (state, ownProps) =>  ownProps.params.page;
const getCategory = (state, ownProps) =>  ownProps.params.category;

const getCategoryVideos = createSelector(
	[ getAllVideos, getCategory ],
	(allVideos, category = 'all') => {
		if (category === 'all') {
			return allVideos
		}
		return allVideos.filter((item) => {
			return item.get('category') === category;
		});
	}
);

const getPageVideos = createSelector(
	[ getCategoryVideos, getPage ],
	(videos, page = 0) => {
		page = parseInt(page);
		return videos.slice(page * perPage, (page + 1) * perPage);
	}
);

const mapStateToProps = (state, ownProps) => {
	let params = ownProps.params;

	return {
		pageVideos: getPageVideos(state, ownProps),
		currentCategory: params.category || 'all',
		categoriesById: state.categoriesById,
		allCategoryVideosSize: getCategoryVideos(state, ownProps).size
	}
};

const VideosList = withRouter(connect(
	mapStateToProps
)(List));

export default VideosList;