/**
 * Created by tang on 2016/11/18.
 */
import {combineReducers} from 'redux';
import login from '../reducers/login';
import submit from '../reducers/submit';
import mySnackbar from './mySnackbar';
import contentList from '../reducers/contentList';
import myPopover from '../reducers/myPopover';
import textDialog from '../reducers/textDialog';

const reducers = combineReducers({
    login,
    submit,
    mySnackbar,
    contentList,
    myPopover,
    textDialog,
});

export default reducers;
