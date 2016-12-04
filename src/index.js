import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './containers/App'
import configureStore from './store/configureStore'
import {Router, Route, hashHistory} from 'react-router';
import SubmitDialog from './components/SubmitDialog'

injectTapEventPlugin();
const store = configureStore();

render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
);