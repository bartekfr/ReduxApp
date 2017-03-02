import {connect} from 'react-redux';
import addVideo from '../components/AddVideo';
import {update, remove }  from '../actions';
import { getAllVideos, getAllCategories } from '../reducers';
import {createSelector} from 'reselect'

const getId = (state, ownProps) =>  ownProps.params.id;

const getVideo = createSelector(
	[ getAllVideos, getId ],
	(videos, id) => {
		return videos.find((video) => video.get('id') == id);
	}
);

const mapStateToProps = (state, ownProps) => {
	let id = ownProps.params.id;

	return {
		title: 'Edit video data',
		editMode: true,
		id: id,
		initialValues: getVideo(state, ownProps),
		categories: getAllCategories(state)
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	let id = ownProps.routeParams.id;
	return {
		update: (data) => {
			data.id = id;
			dispatch(update(data))
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