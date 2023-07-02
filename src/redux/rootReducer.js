import { combineReducers } from 'redux';
import { countReducer } from '../reducersAndActions/counterReducer';
import { breakReducer } from '../reducersAndActions/breakReducer';

const rootReducer = combineReducers({

    counter: countReducer,
    break: breakReducer,
})

export default rootReducer;