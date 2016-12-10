import React from 'react';
import Developer_Entry from './MacroS_PeerR/Developer_Entry.js'
import Developer_Thread from './MacroS_PeerR/Developer_thread.js'


export default class Macro_Status_Page extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row title">
          <div className="col-md-12 pull-left">
              <h1>Macro Status (Developer)</h1>
          </div>
        </div>
        <div className="row">
          <div className="row main_table">
            <div className="col-md-9 col-md-offset-1">
              <div className="row">
                <div className="col-md-12">
                  <table className="table table-bordered table-striped">
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
                      <Developer_Thread>
                        <Developer_Entry id="1" Date="20 hrs" Macroname="Macor2" status="Approve"/>
                        <Developer_Entry id="2" Date="20 hrs" Macroname="Macor1" status="Pending"/>
                        <Developer_Entry id="3" Date="20 hrs" Macroname="Macor3" status="Rejected"/>
                      </Developer_Thread>
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
