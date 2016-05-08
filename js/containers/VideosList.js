import {connect} from 'react-redux';
import List from '../components/VideosList';
import pagination from '../components/Pagination';
import {setPage, loadVideos}  from '../actions';
import CONFIG  from '../const';

const perPage = CONFIG.perPage;

const getVideos = (videos, page) => {
	return videos.slice(page * perPage, (page + 1) * perPage);
};

const mapStateToProps = (state) => {
	return {
		videos: getVideos(state.videosList, state.videosPaginationCurrentPage),
		page: state.videosPaginationCurrentPage,
		all: state.videosList.size,
		perPage: CONFIG.perPage
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