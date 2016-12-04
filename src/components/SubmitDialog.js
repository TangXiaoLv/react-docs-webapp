import React from 'react';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import Paper from 'material-ui/Paper';

let dataSourceTyps = [];
let dataSourceFroms = [];
let dataSourceModule = [];
let dataSourceInterfaces = [];

class SubmitDialog extends React.Component {
    constructor(props) {
        super(props);
    }

    pushItem = () => {
        this.props.submitActions.submit(this.getNewItem());
        this.props.submitActions.closeSubmit();
    };

    updateItem = (key) => {
        this.props.submitActions.update(key, this.getNewItem());
        this.props.submitActions.closeSubmit();
    };

    getNewItem = () => {
        const type = this.type;
        const from = this.from;
        const module = this.module;
        const interfaceName = this.interfaceName.getValue();
        const desc = this.desc.getValue();
        const details = this.details.getValue();

        const isnull = this.isNull(type) || this.isNull(from) || this.isNull(module) || this.isNull(interfaceName);
        if (isnull) {
            alert('check  completeness');
            return null;
        }
        return {
            type,
            from,
            module,
            interfaceName,
            desc,
            details,
        };
    };

    isNull = obj => {
        return obj === undefined || obj === null || obj === '';
    };

    updateArray() {
        dataSourceTyps = [];
        dataSourceFroms = [];
        dataSourceModule = [];
        dataSourceInterfaces = [];
        for (let item of this.props.items) {
            if (!dataSourceTyps.includes(item.type)) dataSourceTyps.push(item.type);
            if (!dataSourceFroms.includes(item.from)) dataSourceFroms.push(item.from);
            if (!dataSourceModule.includes(item.module)) dataSourceModule.push(item.module);
            if (!dataSourceInterfaces.includes(item.interfaceName)) dataSourceInterfaces.push(item.interfaceName);
        }
    }


    render() {
        this.updateArray.call(this);
        this.key = '';
        this.type = '';
        this.from = '';
        this.module = '';
        this.interfaceName = '';
        this.desc = '';
        this.details = '';
        let item = this.props.item;
        if (item) {
            this.key = item.key;
            this.type = item.type;
            this.from = item.from;
            this.module = item.module;
            this.interfaceName = item.interfaceName;
            this.desc = item.desc;
            this.details = item.details;
        }
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.props.submitActions.closeSubmit}
            />,
            <FlatButton
                label={this.key === ''?"Ok":"Update"}
                primary={true}
                keyboardFocused={true}
                onTouchTap={()=>{
                    if(this.key){
                        this.updateItem(this.key)
                    }else{
                        this.pushItem(this)
                    }
                }}
            />,
        ];
        return (
            <div>
                <Dialog
                    title={this.key===''?"Add Item":"Update Item"}
                    actions={actions}
                    modal={true}
                    open={this.props.submiting}
                    onRequestClose={this.props.submitActions.closeSubmit}
                    contentStyle={customContentStyle}
                    bodyStyle={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <AutoComplete
                            listStyle={{
                                maxHeight: 300
                            }}
                            onUpdateInput={(text) => {
                                this.from = text
                            }}
                            searchText={this.from}
                            floatingLabelText="origin"
                            filter={AutoComplete.fuzzyFilter}
                            openOnFocus={true}
                            dataSource={dataSourceFroms}
                        />
                        <AutoComplete
                            listStyle={{
                                maxHeight: 300
                            }}
                            onUpdateInput={(text) => {
                                this.type = text
                            }}
                            searchText={this.type}
                            floatingLabelText="type"
                            filter={AutoComplete.fuzzyFilter}
                            openOnFocus={true}
                            dataSource={dataSourceTyps}
                        />
                        <AutoComplete
                            listStyle={{
                                maxHeight: 300
                            }}
                            onUpdateInput={(text) => {
                                this.module = text
                            }}
                            searchText={this.module}
                            floatingLabelText="module"
                            filter={AutoComplete.fuzzyFilter}
                            openOnFocus={true}
                            dataSource={dataSourceModule}
                        />
                        <TextField
                            ref={(ref) => {
                                this.interfaceName = ref;
                            }}
                            defaultValue={this.interfaceName}
                            floatingLabelText="interface"/>
                    </div>
                    <Paper
                        style={{
                            marginTop: 16
                        }}
                        zDepth={0}>
                        <TextField
                            ref={(ref) => {
                                this.desc = ref;
                            }}
                            defaultValue={this.desc}
                            floatingLabelText="description"
                            fullWidth={true}/>
                        <br/>
                        <TextField
                            ref={(ref) => {
                                this.details = ref;
                            }}
                            defaultValue={this.details}
                            floatingLabelText="details"
                            rowsMax={4}
                            rows={4}
                            underlineShow={false}
                            multiLine={true}
                            fullWidth={true}/>
                    </Paper>
                </Dialog>
            </div>
        );
    }
}

const customContentStyle = {
    width: '100%',
    maxWidth: 'none',
};


function mapStateToProps(state) {
    return {
        ...state.submit,
    };
}

export default connect(mapStateToProps)(SubmitDialog);