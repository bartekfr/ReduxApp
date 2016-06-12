import {connect} from 'react-redux';
import main from '../components/App';
import {videosLoad}  from '../actions';


const mapStateToProps = (state, ownProps) => {
	return {
		loadingStatus: state.common.get('loading')
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		videosLoad: () => {
			dispatch(videosLoad());
		}
	}
};

const mainContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(main);

export default mainContainer;