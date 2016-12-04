import React, {findDOMNode, Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {connect} from 'react-redux';
import LoginDialog from './LoginDialog';
import textDialogActions from '../actions/textDialog';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleToggle() {
        this.setState({open: true});
    }

    handleClose() {
        this.setState({open: false});
    }

    render() {
        const {
            openLogin,
            closeLogin,
        } = this.props.loginActions;
        const {dispatch} = this.props;
        return (
            <div >
                <AppBar
                    title="React Native API Docs"
                    zDepth={0}
                    onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
                    iconElementRight={<FlatButton label="LOGIN"/>}
                    onRightIconButtonTouchTap={openLogin}
                />
                <LoginDialog closeLogin={closeLogin}/>
                <Drawer
                    open={this.state.open}
                    docked={false}
                    zDepth={1}
                    onRequestChange={this.handleClose.bind(this)}
                >
                    <MenuItem
                        style={{
                            display: 'flex',
                            height: 64,
                            alignItems: 'center',
                            backgroundColor: '#00bcd4',
                            color: '#eeeeee',
                        }}>React Guide</MenuItem>
                    <MenuItem
                        style={{
                            display: 'flex',
                            height: 64,
                            alignItems: 'center'
                        }}
                        onTouchTap={
                            () => {
                                setTimeout(() => {
                                    dispatch(textDialogActions.openTextDialog('',
                                        'UI Components:http://www.material-ui.com/',
                                        null, null))
                                }, 500);
                                this.handleClose.call(this);
                            }
                        }>declare</MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default connect()(Header);