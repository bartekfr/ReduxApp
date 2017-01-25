import Immutable, {List, Map} from 'immutable';

let commonInit = {
	loading: false,
};

export const common = (state = Map(commonInit), action) => {
	switch (action.type) {
		case 'AJAX_START':
			return state.set('loading', true);
		case 'AJAX_END':
			return state.set('loading', false);
		default:
			return state;
	}
};