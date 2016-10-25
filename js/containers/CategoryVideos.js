import {connect} from 'react-redux';
import categoryVideos from '../components/CategoryVideos';
import { filterCategory }  from '../actions';
import { createSelector } from 'reselect'

//Selectors
const getAllVideos = (state) => state.videosList;

const getCategory = (state, ownProps) =>  ownProps.params.category;

const getFilteredVideos = createSelector(
	[ getAllVideos, getCategory ],
	(allVideos, category = 'all') => {
		if (category === 'all') {
			return allVideos
		}
		return allVideos.filter((item) => {
			return item.get('category') === category;
		});
	}
);

const mapStateToProps = (state, ownProps) => {
	return {
		categoryVideos: getFilteredVideos(state, ownProps)
	}
};


const Picker = connect(
	mapStateToProps
)(categoryVideos);

export default Picker;