import {connect} from 'react-redux';
import List from '../components/VideosList';
import pagination from '../components/Pagination';
import CONFIG  from '../const';
import { createSelector } from 'reselect';
import { withRouter } from 'react-router';

const perPage = CONFIG.perPage;

//Selectors
const getCategoryVideos = (state, ownProps) => ownProps.categoryVideos;
const getPage = (state, ownProps) =>  ownProps.params.page;

const getPageVideos = createSelector(
	[ getCategoryVideos, getPage ],
	(videos, page = 0) => {
		return videos.slice(page * perPage, (page + 1) * perPage);
	}
);

const mapStateToProps = (state, ownProps) => {
	let params = ownProps.params;
	return {
		pageVideos: getPageVideos(state, ownProps),
		category: params.category
	}
};

const VideosList = withRouter(connect(
	mapStateToProps
)(List));

export default VideosList;