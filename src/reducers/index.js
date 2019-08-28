
import counter from './counter';
import logged from './loggIn';
import {combineReducers} from 'redux';



const allReducer= combineReducers ({
    counter,
    logged
})

export default allReducer;