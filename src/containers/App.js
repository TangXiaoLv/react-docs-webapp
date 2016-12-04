import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../components/Header';
import Add from '../components/AddBtn'
import login from '../actions/login'
import submit from '../actions/submit'
import mysnackbar from '../actions/mySnackbar'
import SubmitDialog from '../components/SubmitDialog'
import MySnackbar from '../components/MySnackbar'
import Filter from '../components/Filter'
import ContentList from '../components/ContentList'
import MyPopover from '../components/MyPopover'
import TextDialog from '../components/TextDialog'

class App extends Component {
    render() {
        const {loginActions, submitActions} = this.props;
        return (
            <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 'inherit',
                    minHeight: '100vh',
                }}
            >
                <Header loginActions={loginActions}/>
                <div style={{flex: 1,padding:24}}>
                    <ContentList />
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignSelf: 'flex-end',
                        paddingBottom: 32,
                        paddingRight: 32
                    }}>
                    <Add openSubmit={submitActions.openSubmit}/>
                    <SubmitDialog submitActions={submitActions}/>
                    <MySnackbar />
                    <MyPopover />
                    <TextDialog />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    const loginActions = bindActionCreators(login, dispatch);
    const submitActions = bindActionCreators(submit, dispatch);
    return {
        loginActions,
        submitActions,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);