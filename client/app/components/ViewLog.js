import React from 'react';
import Calendar from 'rc-calendar';
import View_log_Entry from './MacroS_PeerR/View_log_Entry.js'

export default class ViewLog extends React.Component{

  



render(){

  return (
    <div className ="container-fluid">
      <div className = "row title">
        <div className= "col-md-12 pull-left " >
          <h1>View Logs </h1>
        </div>
      </div>
      <div className = "row">
        <div className= "col-md-9" >
          <table className="table">
            <thead>
              <tr>
                <th>Time </th>
                <th>UserName </th>
                <th>Macro Name</th>
                <th>Macro Status</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              <View_log_Entry date={1452668480000} status="Approved" username="tim" macroname="View Car Tables" finishtime={1453668480000} data="This is my data"/>
              <View_log_Entry date={1453668480000} status="Approved" username="Logan Rennick" macroname="Update Life Policy" finishtime={1472668480000} data="This is my data"/>
              <View_log_Entry date={1472668480000} status="Rejected" username="Tim Addai" macroname="Delete Life Policy" finishtime={1482668480000} data=""/>
              <View_log_Entry date={1482668480000} status="Pending" username="Eric Gendreau" macroname="Update Housing Policy" finishtime={0} data=""/>
              <View_log_Entry date={1492668480000} status="Approved" username="Jason Lee" macroname="Add New Housing Table" finishtime={0} data=""/>
            </tbody>
          </table>
        </div>
        <div className="col-md-3">
            <Calendar />
              <button type="button" className="btn btn-default searchbutton">View logs on select date</button>
        </div>
      </div>
    </div>
    );
}
}
