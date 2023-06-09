const initialState = {
	selectedLanguage: 'All',
	showLoader: false,
	repos: [],
	error: null,
}

export const popularReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_SELECTED_LANGUAGE':
			return {
				...state,
				selectedLanguage: action.payload,
			}
		case 'SET_REPOS':
			return {
				...state,
				repos: action.payload,
				showLoader: false,
			}
		case 'SET_SHOW_LOADER':
			return {
				...state,
				showLoader: true,
				error: null,
			}
		case 'SET_ERROR':
			return {
				...state,
				showLoader: false,
				error: action.payload,
			}
		default:
			return state
	}
}
