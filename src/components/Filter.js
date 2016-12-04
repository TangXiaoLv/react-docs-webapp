import React from 'react';
import {connect} from 'react-redux';
import FileterItem from './FileterItem';


export default class Filter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'flex-start',
                    alignItems:'center',
                    height:48
                }}
            >
                <FileterItem style={{marginLeft:48}}/>
            </div>
        );
    }
}