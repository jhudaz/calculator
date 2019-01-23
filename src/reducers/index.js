import {combineReducers} from 'redux';
import calculatorReducer from './reducer-calculator';
import gitProfileReducer from './reducer-git-profile';

export default combineReducers ({
    calculatorReducer,
    gitProfileReducer
});