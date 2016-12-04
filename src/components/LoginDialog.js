import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';

class LoginDialog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.props.closeLogin}
            />,
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.props.closeLogin}
            />,
        ];

        return (
            <div>
                <Dialog
                    title="Login(Not Implemented)"
                    actions={actions}
                    modal={false}
                    open={this.props.logining}
                    onRequestClose={this.props.closeLogin}
                >
                    <TextField
                        hintText="Username"
                        floatingLabelText="Username"
                        type="text"
                    /><br />
                    <TextField
                        hintText="Password"
                        floatingLabelText="Password"
                        type="password"
                    /><br />
                </Dialog>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {logining} = state.login;
    return {
        logining
    };
}

export default connect(mapStateToProps)(LoginDialog);