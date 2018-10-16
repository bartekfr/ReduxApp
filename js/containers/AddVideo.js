import { connect } from 'react-redux';
import addVideo from '../components/AddVideo';
import { add }  from '../actions';
import shortid from 'shortid';
import { getAllCategories } from '../reducers';

const mapDispatchToProps = (dispatch) => ({
	update: (data) => {
		data.id = shortid.generate();
		dispatch(add(data));
	}
});

const mapStateToProps = (state, ownProps) => ( {
	categories: getAllCategories(state)
});

const AddVideo = connect(
	mapStateToProps,
	mapDispatchToProps
)(addVideo);

export default AddVideo;