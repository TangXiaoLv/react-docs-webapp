import * as types from '../res/strings/actionTypes'

function openPopover(anchorEl, item) {
    return {type: types.POPOVER_OPEN, anchorEl, item}
}

function closePopover() {
    return {type: types.POPOVER_CLOSE}
}

export default {
    openPopover,
    closePopover,
}