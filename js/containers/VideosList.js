import {connect} from 'react-redux';
import List from '../components/VideosList';
import pagination from '../components/Pagination';
import {setPage, loadVideos}  from '../actions';
import CONFIG  from '../const';

const perPage = CONFIG.perPage;

const getVideos = (videos, page) => {
	return videos.slice(page * perPage, (page + 1) * perPage);
};

const mapStateToProps = (state, ownProps) => {
	var currentPage = ownProps.params.page || 0;
	return {
		videos: getVideos(state.videosList, currentPage),
		page: currentPage,
		all: state.videosList.size,
		perPage: CONFIG.perPage,
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