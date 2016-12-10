import React from 'react';

export default class Adm_Entry extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render() {
      return (
        <tr>
          <th scope="row">{this.props.id}</th>
          <td>{this.props.date}</td>
          <td>{this.props.username}</td>
          <td>{this.props.Macroname}</td>
          <td>
            <div className="row">
              <div className="col-md-4 col-md-offset-1 Approve_button">
                <button className="btn btn-default btn-sm Approve" type="button">Approve</button>
              </div>
              <div className="col-md-4 col-md-offset-1 reject_button">
                <button className="btn btn-default btn-sm Reject" type="button">Reject</button>
              </div>
            </div>
          </td>
          <td>
            <center>
              <button className="btn btn-default btn-sm View_button" type="button">View</button>
            </center>
          </td>
        </tr>
     )
   }
 }
