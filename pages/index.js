import React, { Component } from 'react';
import { Paper, RaisedButton } from 'material-ui';

import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import TextField from 'material-ui/lib/text-field';
import Toggle from 'material-ui/lib/toggle';

// import table data
import data from '../components/table-data/kobe-Uni/kokubun.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCredits: 0,
    };
  }

  _onRowSelection(rowNumber) {
    var total = 0;

    for (var i in rowNumber) {
      var value = rowNumber[i];
      var total = total + data[value].requiredCredits;
    }

    console.log(total);
    var totalCredits = document.getElementById('totalCredits');
    totalCredits.textContent = total;

    var remainingCredits = document.getElementById('remainingCredits');
    remainingCredits.textContent = 136 - total;

    /*
    this.setState({
      totalCredits: this.state.totalCredits + total,
    });

    console.log(this.state.totalCredits);
    */
  }

  render() {
    return (
      <div>
        <Table
          height='500px'
          fixedHeader={true}
          fixedFooter={true}
          selectable={true}
          multiSelectable={true}
          onRowSelection={this._onRowSelection.bind(this)}
        >
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{ textAlign: 'center' }}>
                神戸大学 国際文化学部 単位チェッカー
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn>授業区分</TableHeaderColumn>
              <TableHeaderColumn>科目</TableHeaderColumn>
              <TableHeaderColumn>必要修得単位数</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            deselectOnClickaway={false}
            stripedRows={false}
          >
            {data.map(row => (
              <TableRow selected={row.selected}>
                <TableRowColumn>{row.sorting}</TableRowColumn>
                <TableRowColumn>{row.subject}</TableRowColumn>
                <TableRowColumn>{row.requiredCredits}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableRowColumn>合計必要修得単位数</TableRowColumn>
              <TableRowColumn></TableRowColumn>
              <TableRowColumn>136</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>あなたの合計修得単位数</TableRowColumn>
              <TableRowColumn></TableRowColumn>
              <TableRowColumn id="totalCredits"></TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>あなたの残り必要修得単位数</TableRowColumn>
              <TableRowColumn></TableRowColumn>
              <TableRowColumn id="remainingCredits"></TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn colSpan="3" style={{ textAlign: 'center' }}>
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
  }
}
