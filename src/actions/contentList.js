import {getRef} from "../utils/wilddog";
import * as types from '../res/strings/actionTypes'
import Snackbar from './mySnackbar';
import {updateMenu} from './submit';
import mySnackbar from '../actions/mySnackbar';

const ref = getRef('Items');

function getItems() {
    return (dispatch, getState) => {
        ref.orderByKey().on('value', (snapshot) => {
            let obj = snapshot.val();
            let array = [];
            for (let key in obj) {
                let item = obj[key];
                array.push({...item, key});
            }
            dispatch(fetchItemsSuccess(array));
            dispatch(updateMenu(array));
        });
    }
}

function deleteItem({key}) {
    return (dispatch, getState) => {
        ref.child(`${key}`)
            .remove((err) => {
                if (err) {
                    mySnackbar.openSnackBar("delete fail", true, false)
                }
            });
    }
}

function fetchItemsSuccess(items) {
    return {type: types.CONTENTLIST_ITEMS, items}
}

export default {
    getItems,
    fetchItemsSuccess,
    deleteItem
}
