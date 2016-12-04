/**
 * Created by tang on 2016/11/29.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Snackbar from 'material-ui/Snackbar';

class MySnackbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {text, open, color} = this.props;
        return (
            <Snackbar
                open={open}
                message={text}
                autoHideDuration={4000}
                contentStyle={{
                        color:color,
                    }}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state.mySnackbar,
    };
}

export default connect(mapStateToProps)(MySnackbar);