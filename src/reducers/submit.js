/**
 * Created by tang on 2016/11/18.
 */

import * as types from '../res/strings/actionTypes'

const initState = {
    submiting: false,
    item: null,
    items: []
};

const submit = (state = initState, action) => {
    const {type, item, items} = action;
    switch (type) {
        case types.SUBMIT_OPEN:
            return {...state, item, submiting: true};
        case types.SUBMIT_CLOSE:
            return {...state, submiting: false};
        case types.SUBMIT_UPDATEMENU:
            return {
                items,
                submiting: false,
            };
        default:
            return state;
    }
};

export default submit;