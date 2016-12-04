import {getRef} from "../utils/wilddog";
import * as types from '../res/strings/actionTypes'
import Snackbar from './mySnackbar';

const ref = getRef('Items');

function submit(item) {
    const {type} = item;
    return (dispatch, getState) => {
        ref.push(item)
            .then(() => {
                dispatch(Snackbar.openSnackBar('提交成功', true, true));
            })
            .catch((err) => {
                dispatch(Snackbar.openSnackBar('提交失败', true, false));
            });
    }
}

function update(key,item) {
    return (dispatch, getState) => {
        ref.child(key).update(item)
            .then(() => {
                dispatch(Snackbar.openSnackBar('更新成功', true, true));
            })
            .catch((err) => {
                dispatch(Snackbar.openSnackBar('更新失败', true, false));
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
