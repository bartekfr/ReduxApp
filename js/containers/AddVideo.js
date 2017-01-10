import {connect} from 'react-redux';
import addVideo from '../components/AddVideo';
import {add}  from '../actions';
import shortid from 'shortid';
import { getAllCategories } from '../reducers';

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
		categories: getAllCategories(state)
	}
};

const AddVideo = connect(
	mapStateToProps,
	mapDispatchToProps
)(addVideo);

export default AddVideo;