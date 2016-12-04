/**
 * Created by tang on 2016/11/18.
 */

import * as types from '../res/strings/actionTypes'

const initState = {
    open: false,
    anchorEl: null,
    item: null,
};

const myPopover = (state = initState, action) => {
    const {type, anchorEl, item} = action;
    switch (type) {
        case types.POPOVER_OPEN:
            return {open: true, anchorEl, item};
        case types.POPOVER_CLOSE:
            return {...state, open: false};
        default:
            return state;
    }
};

export default myPopover;