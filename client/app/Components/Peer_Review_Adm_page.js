import React from 'react';
import Adm_Entry from './MacroS_PeerR/Adm_Entry.js'


export default class Peer_Review_Page extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row title">
          <div className="col-md-12 pull-left">
            <h1>Peer Review (Administrators)</h1>
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
                      <Adm_Entry id="1" date="20 hrs" username="Tim" macroname="Macor2"/>
                      <Adm_Entry id="2" date="20 hrs" username="Kelvin" macroname="Macor1"/>
                      <Adm_Entry id="3" date="20 hrs" username="Eric" macroname="Macor3"/>
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
