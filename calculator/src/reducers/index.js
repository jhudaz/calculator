import {combineReducers} from 'redux';
import calculatorReducer from './reducer-calculator';
import gitProfileReducer from './reducer-git-profile';
import consumeApiReducer from './reducer-consume-api';

export default combineReducers ({
    calculatorReducer,
    gitProfileReducer,
    consumeApiReducer
});