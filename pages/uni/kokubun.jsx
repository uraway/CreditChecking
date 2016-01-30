/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';

import { FacebookLikeButton, TwitterButton } from 'react-social-buttons';

// import table data
import data from './kokubun.js';

export default class App extends Component {
   constructor(props) {
     super(props);
   }

   _onRowSelection(rowNumber) {
     let total = 0;

     for (let i in rowNumber) {
       let value = rowNumber[i];
       total = total + data[value].requiredCredits;
     }

     let totalCredits = document.getElementById('totalCredits');
     totalCredits.textContent = total;

     let remainingCredits = document.getElementById('remainingCredits');
     remainingCredits.textContent = 136 - total;
   }

   render() {
     const url = "https://creditchecking.firebaseapp.com";

     return (
       <div>
         <p><a className="Navigation-link" href="https://kym.kobe-u.ac.jp/kobe-u/campus" target="_blank">うりぼーネット</a>で修得単位を確認する</p>
         <Table
           height="500px"
           fixedHeader={true}
           fixedFooter={true}
           selectable={true}
           multiSelectable={true}
           onRowSelection={this._onRowSelection.bind(this)}
         >
           <TableHeader displaySelectAll={false}>
             <TableRow>
               <TableHeaderColumn colSpan='3' style={{ textAlign: 'center' }}>
                 神戸大学 国際文化学部
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
               <TableRowColumn />
               <TableRowColumn>136</TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn>あなたの合計修得単位数</TableRowColumn>
               <TableRowColumn />
               <TableRowColumn id="totalCredits"></TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn>あなたの残り必要修得単位数</TableRowColumn>
               <TableRowColumn />
               <TableRowColumn id='remainingCredits' style={{ color: 'red' }} />
             </TableRow>
             <TableRow>
               <TableRowColumn colSpan="3" style={{ textAlign: "center" }} />
             </TableRow>
           </TableFooter>
         </Table>
         <FacebookLikeButton url={url} />
         <TwitterButton url={url} />
       </div>
     );
   }
 }
