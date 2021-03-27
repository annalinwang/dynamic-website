import { combineReducers } from 'redux'

import introduction from './introduction'
import posts from './posts'

//returns a wrapper of reducers (rootReducer)
export default combineReducers({
	introduction,
    posts
}) 
