import {connect} from 'react-redux';
import List from '../components/VideosList';
import pagination from '../components/Pagination';
import {setPage, loadVideos}  from '../actions';
import CONFIG  from '../const';
import {createSelector} from 'reselect'

const perPage = CONFIG.perPage;

//Selectors
const getVideosList = (state) => state.videosList;
const getPage = (state, ownProps) =>  ownProps.params.page || 0;

const getVideos = createSelector(
	[ getVideosList, getPage ],
	(videos, page) => {
		return videos.slice(page * perPage, (page + 1) * perPage);
	}
);

const mapStateToProps = (state, ownProps) => {
	return {
		videos: getVideos(state, ownProps),
		videosSize: state.videosList.size,
		loadingStatus: state.common.get('loading')
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onPageClick: (page) => {
			dispatch(setPage(page));
		},
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