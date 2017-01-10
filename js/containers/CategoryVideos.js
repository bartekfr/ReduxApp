import {connect} from 'react-redux';
import categoryVideos from '../components/CategoryVideos';
import { filterCategory }  from '../actions';
import { getAllVideos, getAllCategories } from '../reducers';
import { createSelector } from 'reselect'

//Selectors
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
		categoryVideos: getFilteredVideos(state, ownProps),
		categories: getAllCategories(state)
	}
};


const Picker = connect(
	mapStateToProps
)(categoryVideos);

export default Picker;