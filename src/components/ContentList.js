import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import contentList from '../actions/contentList';
import myPopover from '../actions/myPopover';


class ContentList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const items = this.props.items;
        return (
            <div>
                <Table
                    style={{
                        maxHeight:600
                    }}
                    fixedHeader={true}
                    fixedFooter={false}
                    selectable={false}
                    onCellClick={(row,column,event)=>{
                        this.props.openPopover(event.currentTarget,items[row]);
                    }}
                >
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn >origin</TableHeaderColumn>
                            <TableHeaderColumn >type</TableHeaderColumn>
                            <TableHeaderColumn >module</TableHeaderColumn>
                            <TableHeaderColumn >interface</TableHeaderColumn>
                            <TableHeaderColumn >description</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} showRowHover={true}>
                        {items.map((item, index) => {
                            const {key, type, from, module, interfaceName, desc, details} = item;
                            return (
                                <TableRow key={key}>
                                    <TableRowColumn >{from}</TableRowColumn>
                                    <TableRowColumn >{type}</TableRowColumn>
                                    <TableRowColumn >{module}</TableRowColumn>
                                    <TableRowColumn >{interfaceName}</TableRowColumn>
                                    <TableRowColumn >{desc}</TableRowColumn>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {...state.contentList}
}

function mapDispatchToProps(dispatch) {
    const contentListActions = bindActionCreators(contentList, dispatch);
    const myPopoverActions = bindActionCreators(myPopover, dispatch);
    return {
        ...contentListActions,
        ...myPopoverActions,

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);