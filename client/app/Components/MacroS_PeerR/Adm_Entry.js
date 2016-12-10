import React from 'react';

export default class Adm_Entry extends React.Component {

    render() {
      return (
        <tr>
          <th scope="row">1</th>
          <td>10/08/2016</td>
          <td>Kelvin</td>
          <td>Macro1</td>
          <td>
            <div class="row">
              <div class="col-md-4 col-md-offset-1 Approve_button">
                <button class="btn btn-default btn-sm Approve" type="button">Approve</button>
              </div>
              <div class="col-md-4 col-md-offset-1 reject_button">
                <button class="btn btn-default btn-sm Reject" type="button">Reject</button>
              </div>
            </div>
          </td>
          <td>
            <center>
              <button class="btn btn-default btn-sm View_button" type="button" data-toggle="modal" data-target=".bs-Data-modal-lg">View</button>
            </center>
          </td>
        </tr>
     )
   }
 }
