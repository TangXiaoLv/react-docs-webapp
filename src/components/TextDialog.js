import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import closeTextDialog from '../actions/textDialog';
import TextField from 'material-ui/TextField';

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
class TextDialog extends React.Component {

    render() {
        const {title, content, confirmAction, open, param, dispatch} = this.props;
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={()=>dispatch(closeTextDialog.closeTextDialog())}
            />,
            <FlatButton
                label="Ok"
                primary={true}
                onTouchTap={
                    ()=>{
                        if(confirmAction){
                            confirmAction(param);
                        }
                        dispatch(closeTextDialog.closeTextDialog());
                    }
                }
            />,
        ];

        return (
            <div>
                <Dialog
                    autoScrollBodyContent={false}
                    animated={false}
                    actions={actions}
                    modal={false}
                    open={open}
                    onRequestClose={()=>dispatch(closeTextDialog.closeTextDialog())}
                >
                    <TextField
                        hintText="not yet"
                        className={'dialog-text'}
                        value={content}
                        rowsMax={8}
                        rows={1}
                        underlineShow={false}
                        multiLine={true}
                        fullWidth={true}/>

                </Dialog>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state.textDialog,
    };
}

export default connect(mapStateToProps)(TextDialog);
