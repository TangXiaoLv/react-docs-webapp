import * as types from '../res/strings/actionTypes'

function openTextDialog(title, content, confirmAction, param) {
    return {type: types.TEXTDIALOG_OPEN, title, content, confirmAction,param}
}

function closeTextDialog() {
    return {type: types.TEXTDIALOG_CLOSE}
}

export default {
    openTextDialog,
    closeTextDialog,
}