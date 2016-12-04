/**
 * Created by tang on 2016/11/18.
 */

import * as types from '../res/strings/actionTypes'

const initState = {logining: false};

const login = (state = initState, action) => {
    const {type} = action;
    switch (type) {
        case types.LOGIN_OPEN:
            return {logining: true};
        case types.LOGIN_CLOSE:
            return {logining: false};
        default:
            return state;
    }
};

export default login;