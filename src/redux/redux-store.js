import { combineReducers, createStore } from 'redux'
import dialogsReducer from './reducers/dialogsReducer'
import friendsReducer from './reducers/friendsReducer'
import profileReducer from './reducers/profileReducer'

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer
})

const store = createStore(reducers)

export default store