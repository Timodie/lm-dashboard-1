import React from 'react';
import Calendar from 'rc-calendar';
import View_log_Entry from './MacroS_PeerR/View_log_Entry.js'
import {getViewLogData,updateHistory} from '../server.js';

export default class ViewLog extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      Year : '',
      Month : '',
      Date : ''
    };
  }

  onselect(newdate){
    this.setState({
      Year : newdate._d.getFullYear(),
      Month : newdate._d.getMonth(),
      Date : newdate._d.getDate()
    })

  }

componentDidMount(){

}

  onSubmit(e){
    e.preventDefault();
    updateHistory(this.state.Year,this.state.Month,this.state.Date,() =>{})
    // console.log(this.state.Year);
    // console.log(this.state.Month);
    // console.log(this.state.Date);
    // Here we have date of of the select then we can send the date to the server to get the logs we want
  }


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
              <View_log_Entry date={1452668480000} status="Approved" username="user1" macroname="Update Status Code by Run Name and Driver Step Detail ID" finishtime={1453668480000} data="This is my data"/>
              <View_log_Entry date={1453668480000} status="Approved" username="admin1" macroname="Update Status Code by Run Name and Audit ID" finishtime={1472668480000} data="This is my data"/>
              <View_log_Entry date={1472668480000} status="Rejected" username="user1" macroname="Delete All Schedule entries by Run Name" finishtime={1482668480000} data=""/>
              <View_log_Entry date={1482668480000} status="Pending" username="user2" macroname="Delete All Schedule entries by Run Name and Group Number" finishtime={0} data=""/>
              <View_log_Entry date={1492668480000} status="Approved" username="user2" macroname="Delete All Step Detail entries by Run Name" finishtime={0} data=""/>
            </tbody>
          </table>
        </div>
        <div className="col-md-3">
            <Calendar onSelect={(newdate) => this.onselect(newdate)}/>
              <button type="button" className="btn btn-default searchbutton" onClick={(e) => this.onsubmit(e)}>View logs on select date</button>
        </div>
      </div>
    </div>
    );
}
}
