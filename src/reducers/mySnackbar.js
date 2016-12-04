/**
 * Created by tang on 2016/11/18.
 */

import * as types from '../res/strings/actionTypes'

const initState = {
    text: '',
    open: false,
    color: ''
};

const mySnackbar = (state = initState, action) => {
    const {type, text, open, successColor} = action;
    const color = successColor ? '#4CAF50' : '#F44336';
    switch (type) {
        case types.MYSNACKBAR_OPEN:
            return {text, open, color};
        default:
            return state;
    }
};

export default mySnackbar;