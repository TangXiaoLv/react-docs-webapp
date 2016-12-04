/**
 * Created by tang on 2016/11/18.
 */

import * as types from '../res/strings/actionTypes'

const initState = {
    open: false,
    title: '',
    content: '',
    confirmAction: null,
    param: {}
};

const textDialog = (state = initState, action) => {
    const {type, title, content, confirmAction, param} = action;
    switch (type) {
        case types.TEXTDIALOG_OPEN:
            return {title, content, confirmAction, param, open: true};
        case types.TEXTDIALOG_CLOSE:
            return {...state, open: false};
        default:
            return state;
    }
};

export default textDialog;