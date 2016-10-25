import {connect} from 'react-redux';
import categoryVideos from '../components/CategoryVideos';
import { filterCategory }  from '../actions';
import { createSelector } from 'reselect'

//Selectors
const getVideos = (state) => state.videosList;

const getCategory = (state, ownProps) =>  ownProps.params.category;

const getFilteredVideos = createSelector(
	[ getVideos, getCategory ],
	(videos, category = 'all') => {
		if (category === 'all') {
			return videos
		}
		return videos.filter((item) => {
			return item.get('category') === category
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