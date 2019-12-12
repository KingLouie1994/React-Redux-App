//import axios from 'axios';
import * as types from './actionTypes';

export const increase = () => {
    return {
        type: types.INCREASE,
    };
}

export const decrease = () => {
    return {
        type: types.DECREASE,
    };
}