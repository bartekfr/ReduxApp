import {connect} from 'react-redux';
import pagination from '../components/Pagination';
import {setPage}  from '../actions';
import {bindActionCreators} from 'redux';
import CONFIG  from '../const';


const mapStateToProps = (state) => {
	return {
		page: state.pagination,
		all: state.videos.size,
		perPage: CONFIG.perPage
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onPageClick: (page) => {
			dispatch(setPage(page));
		}
	}
};

const Pagination = connect(
	mapStateToProps,
	mapDispatchToProps
)(pagination);


export default Pagination;