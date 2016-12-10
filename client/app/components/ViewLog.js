import React from 'react';

export default class ViewLog extends React.Component{

render(){
  return (
    <div className ="container-fluid">
      <div className = "row title">
        <div className= "col-md-12 pull-left " >
          <h1>View Logs </h1>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Time (12/10/2016) </th>
            <th>UserName </th>
            <th>Macro Name</th>
            <th>Macro Status</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr className="success">
            <td>9:00 am</td>
            <td>Zhongce Ji</td>
            <td>View Car Tables</td>
            <td>
              <button className="btn btn-link btn-md Approve" type="button">Approved</button>
            </td>
            <td>9:01 am</td>
          </tr>
          <tr className="success">
            <td>9:05 am</td>
            <td>Logan Rennick</td>
            <td>Update Life Policy</td>
            <td>
              <button className="btn btn-link btn-md Approve" type="button">Approved</button>
            </td>
            <td>9:07 am</td>
          </tr>
          <tr className="danger">
            <td>9:10 am</td>
            <td>Tim Addai</td>
            <td>Delete Life Policy</td>
            <td>
              <button className="btn btn-link btn-md Approve" type="button">Rejected</button>
            </td>
            <td>9:11 pm </td>
          </tr>

          <tr className="warning">
            <td>9:12 am</td>
            <td>Eric Gendreau</td>
            <td>Update Housing Policy</td>
            <td>
              <button className="btn btn-link btn-md Approve" type="button">Pending</button>
            </td>
            <td>Awaiting response</td>
          </tr>
          <tr className="active">
            <td>9:15 am</td>
            <td>Jason Lee</td>
            <td>Add New Housing Table</td>
            <td>
              <button className="btn btn-link btn-md Approve" type="button">Approved</button>
            </td>
            <td>In progress</td>
          </tr>
        </tbody>
      </table>
    </div>
    );
}
}
