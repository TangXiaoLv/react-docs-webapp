import * as types from '../res/strings/actionTypes'

const initState = {items: []};

const contentList = (state = initState, action) => {
    const {type, items} = action;
    switch (type) {
        case types.CONTENTLIST_ITEMS:
            return {items};
        default:
            return state;
    }
};

export default contentList;