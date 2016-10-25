import {connect} from 'react-redux';
import List from '../components/VideosList';
import pagination from '../components/Pagination';
import {setPage, loadVideos}  from '../actions';
import CONFIG  from '../const';
import { createSelector } from 'reselect';

const perPage = CONFIG.perPage;

//Selectors
const getVideosList = (state, ownProps) => ownProps.videos;

const getPage = (state, ownProps) =>  ownProps.page || 0;

const getVideos = createSelector(
	[ getVideosList, getPage ],
	(videos, page) => {
		return videos.slice(page * perPage, (page + 1) * perPage);
	}
);

const mapStateToProps = (state, ownProps) => {
	let videos = ownProps.videos;

	return {
		visibleVideos: getVideos(state, ownProps),
		loadingStatus: state.common.get('loading')
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadVideos: () => {
			dispatch(loadVideos());
		}
	};
};

const VideosList = connect(
	mapStateToProps,
	mapDispatchToProps
)(List);

export default VideosList;