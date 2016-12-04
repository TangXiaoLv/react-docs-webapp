import React from 'react';
import {connect} from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const items = [];
for (let i = 0; i < 20; i++) {
    items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`}/>);
}

export default class FileterItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 10};
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <SelectField
                underlineStyle={{borderBottom:'solid 0px'}}
                maxHeight={20}
                value={this.state.value}
                onChange={this.handleChange}>
                {items}
            </SelectField>
        );
    }
}