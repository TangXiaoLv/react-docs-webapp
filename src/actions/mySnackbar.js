import * as types from '../res/strings/actionTypes'

function openSnackBar(text, open, successColor) {
    return {type: types.MYSNACKBAR_OPEN, text, open, successColor}
}

export default {
    openSnackBar,
}