import React from 'react';
import Adm_Entry from './MacroS_PeerR/Adm_Entry.js'


export default class Peer_Review_Page extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row title">
          <div className="col-md-12 pull-left">
            <h1>Peer Review</h1>
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
                        <th>User Name</th>
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
                      <Adm_Entry id="1" date={1453668480000} username="user1" macroname="Update Valuation Start time by Run Name and Audit ID"/>
                      <Adm_Entry id="2" date={1453668480000} username="user2" macroname="Update SLA Date and Time by Run Name"/>
                      <Adm_Entry id="3" date={1453668480000} username="admin1" macroname="Delete All Step Detail entries by Run Name"/>
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
