import { connect } from 'react-redux';
import List from '../components/VideosList';
import CONFIG  from '../const';


const perPage = CONFIG.perPage;
const getVideos = (videos, page) => {
	return videos.slice(page * perPage, (page + 1) * perPage);
};

const mapStateToProps = (state) => {
	return {
		videos: getVideos(state.videos, state.pagination)
	}
};


const VideosList = connect(
	mapStateToProps
)(List);

export default VideosList;