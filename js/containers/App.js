import {connect} from 'react-redux';
import main from '../components/App';
import {videosLoad}  from '../actions';

const mapStateToProps = (state, ownProps) => ({
	loadingStatus: state.common.get('loading')
});

const mapDispatchToProps = (dispatch) => ({
	videosLoad: () => {
		dispatch(videosLoad());
	}
});

const mainContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(main);

export default mainContainer;