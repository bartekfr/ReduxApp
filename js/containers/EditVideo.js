import {connect} from 'react-redux';
import addVideo from '../components/AddVideo';
import {update, remove, setPage}  from '../actions';

const getVideo = (videos, id) => {
	return videos.filter((video) => {
		return video.get('id') == id;
	})
};


const mapStateToProps = (state, ownProps) => {
	let id = ownProps.routeParams.id;
	return {
		title: 'Edit video data',
		editMode: true,
		video: getVideo(state.videosList, id)
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	let id = ownProps.routeParams.id;
	return {
		update: (data) => {
			dispatch(update(id, data))
		},
		remove: (id) => {
			dispatch(remove(id));
			dispatch(setPage(0))
		}
	}
};

const updateVideo = connect(
	mapStateToProps,
	mapDispatchToProps,
	null,
	{pure: true}
)(addVideo);

export default updateVideo;