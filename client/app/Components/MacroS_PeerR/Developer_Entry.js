import React from 'react';

export default class Developer_Entry extends React.Component {

    render() {
      return (
        <tr>
          <th scope="row">this.props.id</th>
          <td>this.props.date</td>
          <td>this.props.macroname</td>
          <td>
            <center>
              this.props.status
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
