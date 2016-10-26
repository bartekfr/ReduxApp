import {connect} from 'react-redux';
import addVideo from '../components/AddVideo';
import {update, remove }  from '../actions';
import {createSelector} from 'reselect'

const getVideosList = (state) => state.videosList;
const getId = (state, ownProps) =>  ownProps.params.id;

const getVideo = createSelector(
	[ getVideosList, getId ],
	(videos, id) => {
		let foundVideo;
		videos.forEach((video) => {
			if (video.get('id') == id) {
				foundVideo = video;
			}
		});
		if (foundVideo) {
			return foundVideo;
		}
	}
);

const mapStateToProps = (state, ownProps) => {
	let id = ownProps.params.id;

	return {
		title: 'Edit video data',
		editMode: true,
		id: id,
		initialValues: getVideo(state, ownProps),
		categories: state.categories
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
		}
	}
};

const updateVideo = connect(
	mapStateToProps,
	mapDispatchToProps
)(addVideo);

export default updateVideo;