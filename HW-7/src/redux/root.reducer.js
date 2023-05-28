import { combineReducers } from 'redux'
import { battleReducer } from './battle.reducer'
import { popularReducer } from './popular.reducer'
import { resultReducer } from './result.reducer'

export default combineReducers({
	popular: popularReducer,
	battle: battleReducer,
	result: resultReducer,
})
