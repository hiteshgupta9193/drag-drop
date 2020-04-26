import { combineReducers } from "redux"
import tasksReducer from 'views/home/reducer'

export default combineReducers({
  tasks: tasksReducer
})