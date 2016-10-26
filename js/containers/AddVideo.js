import {connect} from 'react-redux';
import addVideo from '../components/AddVideo';
import {add}  from '../actions';
import shortid from 'shortid';

const mapDispatchToProps = (dispatch) => {
	return {
		update: (data) => {
			data.id = shortid.generate();
			dispatch(add(data));
		}
	}
};

const mapStateToProps = (state, ownProps) => {
	return {
		categories: state.categories
	}
};

const AddVideo = connect(
	mapStateToProps,
	mapDispatchToProps
)(addVideo);

export default AddVideo;