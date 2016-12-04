import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 36,
};
export default class Add extends React.Component {

    render() {
        return (
            <FloatingActionButton
                onTouchTap={()=>this.props.openSubmit(null)}
                backgroundColor={'#F44336'}
            >
                <ContentAdd />
            </FloatingActionButton>
        )
    }
}
