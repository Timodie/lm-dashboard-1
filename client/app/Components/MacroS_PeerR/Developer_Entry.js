import React from 'react';

export default class Developer_Entry extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render() {
      return (
        <tr>
          <th scope="row">{this.props.id}</th>
          <td>{this.props.Date}</td>
          <td>{this.props.Macroname}</td>
          <td>
            <center>
              {this.props.status}
            </center>
          </td>
          <td>
            <center>
              <button className="btn btn-default btn-sm View_button" type="button" >View</button>
            </center>
          </td>
        </tr>
     )
   }
 }
