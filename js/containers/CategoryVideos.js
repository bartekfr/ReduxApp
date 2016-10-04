import {connect} from 'react-redux';
import categoryVideos from '../components/CategoryVideos';
import { filterCategory }  from '../actions';
import { createSelector } from 'reselect'
import { hashHistory } from 'react-router'

//Selectors
const getVideos = (state) => state.videosList;

const getCategory = (state, ownProps) =>  state.category;

const getFilteredVideos = createSelector(
	[ getVideos, getCategory ],
	(videos, category) => {
		if (category === 'all') {
			return videos
		}
		return videos.filter((item) => {
			return item.get('category') === category
		});
	}
);

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		filterCategory: (category) => {
			hashHistory.push('/');
			dispatch(filterCategory(category));
		}
	}
};

const mapStateToProps = (state, ownProps) => {
	let category = state.category;
	return {
		categoryVideos: getFilteredVideos(state),
		category
	}
};


const Picker = connect(
	mapStateToProps,
	mapDispatchToProps
)(categoryVideos);

export default Picker;