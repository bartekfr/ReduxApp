import {connect} from 'react-redux';
import addVideo from '../components/AddVideo';
import {add}  from '../actions';
import shortid from 'shortid';

const mapDispatchToProps = (dispatch) => {
	return {
		update: (data) => {
			data.id = shortid.generate();
			dispatch(add(data))
		}
	}
};

const AddVideo = connect(
	null,
	mapDispatchToProps
)(addVideo);

export default AddVideo;