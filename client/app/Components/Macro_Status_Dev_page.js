import React from 'react';
import Developer_Entry from './MacroS_PeerR/Developer_Entry.js'


export default class Macro_Status_Page extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row title">
          <div className="col-md-12 pull-left">
              <h1>Macro Status</h1>
          </div>
        </div>
        <div className="row">
          <div className="row main_table">
            <div className="col-md-9 col-md-offset-1">
              <div className="row">
                <div className="col-md-12">
                  <table className="table table-striped">
                    <thead className="thead">
                      <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Macro Name</th>
                        <th><center>
                          Status
                        </center></th>
                        <th><center>
                          View
                        </center></th>
                      </tr>
                    </thead>
                    <tbody>
                      <Developer_Entry id="1" Date={1453668480000} Macroname="Delete All Step Detail entries by Run Name" status="Approved" data="Parameters:
                        Run Name: MACRO_TEST"/>
                      <Developer_Entry id="2" Date={1453668480000} Macroname="Update SLA Date and Time by Run Name" status="Pending" data=""/>
                      <Developer_Entry id="3" Date={1453668480000} Macroname="Update Valuation Start time by Run Name and Audit ID" status="Rejected" data=""/>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
