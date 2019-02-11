import {combineReducers} from "redux";
import User from './User'


const allreducers = combineReducers({
    user: User
})


export default allreducers