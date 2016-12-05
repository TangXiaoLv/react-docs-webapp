import {getRef} from "../utils/wilddog";
import * as types from '../res/strings/actionTypes'
import Snackbar from './mySnackbar';

const ref = getRef('Items');

function submit(item) {
    const {type} = item;
    return (dispatch, getState) => {
        ref.push(item)
            .then(() => {
                dispatch(Snackbar.openSnackBar('Submit Success', true, true));
            })
            .catch((err) => {
                dispatch(Snackbar.openSnackBar('Submit Fail', true, false));
            });
    }
}

function update(key,item) {
    return (dispatch, getState) => {
        ref.child(key).update(item)
            .then(() => {
                dispatch(Snackbar.openSnackBar('Update Success', true, true));
            })
            .catch((err) => {
                dispatch(Snackbar.openSnackBar('Update Fail', true, false));
            });
    }
}

function openSubmit(item) {
    return {type: types.SUBMIT_OPEN,item}
}

function closeSubmit() {
    return {type: types.SUBMIT_CLOSE}
}

export function updateMenu(items) {
    return {
        type: types.SUBMIT_UPDATEMENU,
        items,
    }
}

export default {
    openSubmit,
    closeSubmit,
    submit,
    update,
}
