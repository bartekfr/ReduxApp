import {connect} from 'react-redux';
import addVideo from '../components/AddVideo';
import {add}  from '../actions';


const mapDispatchToProps = (dispatch) => {
	return {
		update: (data) => {
			dispatch(add(data))
		}
	}
};

const AddVideo = connect(
	null,
	mapDispatchToProps
)(addVideo);

export default AddVideo;