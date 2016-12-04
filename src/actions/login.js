import * as types from '../res/strings/actionTypes'

function openLogin() {
    return {type: types.LOGIN_OPEN}
}

function closeLogin() {
    return {type: types.LOGIN_CLOSE}
}

export default {
    openLogin,
    closeLogin,
}
