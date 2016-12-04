import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import myPopover from '../actions/myPopover';
import textDialog from '../actions/textDialog';
import contentList from '../actions/contentList';
import submit from '../actions/submit';

class MyPopover extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Popover
                    animated={false}
                    open={this.props.open}
                    anchorEl={this.props.anchorEl}
                    anchorOrigin={{"horizontal":"left","vertical":"top"}}
                    targetOrigin={ {"horizontal":"left","vertical":"top"}}
                    onRequestClose={this.props.closePopover}
                >
                    <Menu>
                        <MenuItem
                            onTouchTap={ ()=>{
                                    setTimeout(()=>this.props.closePopover(),50);
                                    this.props.openTextDialog('',this.props.item.details,this.props.closeTextDialog);
                                }}
                            primaryText="Details"/>
                        <MenuItem
                            onTouchTap={()=>{
                                this.props.openSubmit(this.props.item);
                                setTimeout(()=>this.props.closePopover(),50);
                            }}
                            primaryText="Update"/>
                        <MenuItem
                            style={{
                                color:'#ffffff',
                                backgroundColor:'#F44336',
                            }}
                            onTouchTap={
                                ()=>{
                                    const item = this.props.item;
                                    this.props.openTextDialog(item.desc,`delete ${item.interfaceName} item?`,this.props.deleteItem,{key:item.key});
                                    setTimeout(()=>this.props.closePopover(),50);
                                }
                            }
                            primaryText="Delete"/>
                    </Menu>
                </Popover>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {...state.myPopover}
}

function mapDispatchToProps(dispatch) {
    const myPopoverActions = bindActionCreators(myPopover, dispatch);
    const textDialogActions = bindActionCreators(textDialog, dispatch);
    const contentListActions = bindActionCreators(contentList, dispatch);
    const submitActions = bindActionCreators(submit, dispatch);
    return {
        ...myPopoverActions,
        ...textDialogActions,
        ...contentListActions,
        ...submitActions,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPopover);