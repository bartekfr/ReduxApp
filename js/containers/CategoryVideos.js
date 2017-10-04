import {connect} from 'react-redux';
import categoryVideos from '../components/CategoryVideos';
import { filterCategory }  from '../actions';
import { getAllCategories } from '../reducers';
import { createSelector } from 'reselect'

const mapStateToProps = (state, ownProps) => {
	return {
		categories: getAllCategories(state)
	}
};

const Picker = connect(
	mapStateToProps
)(categoryVideos);

export default Picker;