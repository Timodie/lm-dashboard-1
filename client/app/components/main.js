import React from 'react';

export default class MainPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      macronames : {},
      macroname_field : "",
      date_field : "",
      time_field : "",
      auditid_field : "",
      description_field : ""
    };
  }

  componentDidMount() {
    $('.selectpicker').selectpicker('render');
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>Home</h1>
        </div>
      <ul className="nav nav-pills nav-stacked col-md-2">
        <li className="active"><a href="#tab_c" data-toggle="pill">Update</a></li>
        <li><a href="#tab_d" data-toggle="pill">Delete</a></li>
      </ul>
      <div className="tab-content col-md-8">
              <div className="tab-pane active" id="tab_c">
                   <h4>Update</h4>
                   <div className = "row">
                     <div className = "col-md-6">

                       <div className = "row select">
                         <div className ="col-md-4">
                           Macro Name
                         </div>
                         <div className ="col-md-8">
                             <select className="selectpicker" data-live-search="true" title="Select Update Macro">
                              <option>Schedule Start time by Run Name and Audit ID</option>
                              <option>Status Code by Run Name and Audit ID</option>
                              <option>Valuation End Date by Run Name and Audit ID</option>
                              <option>Valuation Start time by Run Name and Audit ID</option>
                              <option>SLA Date and Time by Audit ID</option>
                              <option>SLA Date and Time by Run Name</option>
                              <option>Run Status Code by Run Name and Group Number</option>
                              <option>Run Status Code by Run Name and Driver Step Detail ID</option>
                              <option>Active Step Indicator by Driver Step ID</option>
                              <option>Active Step Indicator by Run Name and Driver Step ID</option>
                              <option>Active Step Indicator by Run Name</option>
                              <option>Active Step Indicator by Run Name and Group Number</option>
                             </select>
                         </div>
                        </div>

                        <div className = "row select">
                          <div className ="col-md-4">
                            Approver
                          </div>
                          <div className ="col-md-8">
                              <select className="selectpicker" data-live-search="true" >
                               <option>All</option>
                               <option>ericgendreau</option>
                               <option>timmodie</option>
                              </select>
                          </div>
                         </div>

                        <div className = "row select">
                          <div className ="col-md-4">
                            Date
                          </div>
                          <div className ="col-md-8">

                            <div className="input-group" >
                              <input type="text" className="form-control" placeholder="Date" value={this.state.date_field} aria-describedby="sizing-addon2 " />
                            </div>
                          </div>
                         </div>

                         <div className = "row select">
                           <div className ="col-md-4">
                             Time
                           </div>
                           <div className ="col-md-8">

                             <div className="input-group" >
                               <input type="text" className="form-control" placeholder="Time" aria-describedby="sizing-addon2 " />
                             </div>
                           </div>
                          </div>

                          <div className = "row select">
                            <div className ="col-md-4">
                              Audit ID
                            </div>
                            <div className ="col-md-8">

                              <div className="input-group" >
                                <input type="text" className="form-control" placeholder="Audit ID" aria-describedby="sizing-addon2 " />
                              </div>
                            </div>
                           </div>

                           <div className = "row select">
                             <div className ="col-md-4">
                               Description
                             </div>
                             <div className ="col-md-8">

                               <div className="input-group" >
                                 <input type="text" className="form-control" placeholder="Description" aria-describedby="sizing-addon2 " />
                               </div>
                             </div>
                            </div>

                       </div>
                      <div className = "col-md-4">
                        <div className = "row reset">
                          <button type="button" className="btn btn-default btn-lg">
                            <span className="glyphicon glyphicon-ok thisglyph" aria-hidden="true"></span>
                             Submit
                          </button>
                        </div>
                        <div className = "row reset">
                          <button type="button" className="btn btn-default btn-lg">
                            <span className="glyphicon glyphicon-repeat thisglyph" aria-hidden="true"></span>
                             Reset
                          </button>
                        </div>
                      </div>
                     </div>
              </div>
              <div className="tab-pane" id="tab_d">
                   <h4>Delete</h4>
                   <div className = "row">
                     <div className = "col-md-6">

                       <div className = "row select">
                         <div className ="col-md-4">
                           Macro Name
                         </div>
                         <div className ="col-md-8">
                             <select className="selectpicker" data-live-search="true" title="Select Delete Macro">
                              <option>All Schedule entries by Run Name</option>
                              <option>All Step entries by Run Name</option>
                              <option>All Step entries by Run Name and Group Number</option>
                              <option>All Step entries by Run Name and Driver Step ID</option>
                              <option>All Step Detail entries by Run Name</option>
                             </select>
                         </div>
                        </div>

                        <div className = "row select">
                          <div className ="col-md-4">
                            Approver
                          </div>
                          <div className ="col-md-8">
                              <select className="selectpicker" data-live-search="true" >
                               <option>All</option>
                               <option>ericgendreau</option>
                               <option>timmodie</option>
                              </select>
                          </div>
                         </div>

                        <div className = "row select">
                          <div className ="col-md-4">
                            Run Name
                          </div>
                          <div className ="col-md-8">

                            <div className="input-group" >
                              <input type="text" className="form-control" placeholder="Run Name" aria-describedby="sizing-addon2 " />
                            </div>
                          </div>
                         </div>

                         <div className = "row select">
                           <div className ="col-md-4">
                             Group ID
                           </div>
                           <div className ="col-md-8">
                             <div className="input-group" >
                               <input type="text" className="form-control" placeholder="Group ID" aria-describedby="sizing-addon2 " />
                             </div>
                           </div>
                          </div>


                       </div>
                      <div className = "col-md-4">
                        <div className = "row reset">
                          <button type="button" className="btn btn-default btn-lg">
                            <span className="glyphicon glyphicon-ok thisglyph" aria-hidden="true" ></span>
                             Submit
                          </button>
                        </div>
                        <div className = "row reset">
                          <button type="button" className="btn btn-default btn-lg">
                            <span className="glyphicon glyphicon-repeat thisglyph" aria-hidden="true"></span>
                             Reset
                          </button>
                        </div>
                      </div>
                     </div>
              </div>
      </div>
      </div>
    );
  }
}
