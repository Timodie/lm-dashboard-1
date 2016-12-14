import React from 'react';

export default class MainPanel extends React.Component {
  componentDidMount() {
    $('.selectpicker').selectpicker('render');

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>Main Page</h1>
        </div>
      <ul className="nav nav-pills nav-stacked col-md-2">
        <li className="active"><a href="#tab_a" data-toggle="pill">View Data</a></li>
        <li><a href="#tab_b" data-toggle="pill">Add</a></li>
        <li><a href="#tab_c" data-toggle="pill">Update</a></li>
        <li><a href="#tab_d" data-toggle="pill">Delete</a></li>
      </ul>
      <div className="tab-content col-md-8">
              <div className="tab-pane active" id="tab_a">
                   <h4>View Data</h4>
                   <div className = "row">
                     <div className = "col-md-6">

                       <div className = "row select">
                         <div className ="col-md-4">
                           Name
                         </div>
                         <div className ="col-md-8">
                             <select className="selectpicker" data-live-search="true" title="Select a Name">
                               <option>ericgendreau</option>
                              <option>gordananderson</option>
                             </select>
                         </div>
                        </div>

                        <div className = "row select">
                          <div className ="col-md-4">
                            Table
                          </div>
                          <div className ="col-md-8">
                              <select className="selectpicker" data-live-search="true" title="Select a Table">
                                <option>Table1</option>
                               <option>myTable2</option>
                                 <option>iwantTable3</option>
                                <option>aTable4</option>
                                  <option>attaTable5</option>
                                 <option>hiTable6</option>
                              </select>
                          </div>
                         </div>

                         <div className = "row select">
                           <div className ="col-md-4">
                             Column
                           </div>
                           <div className ="col-md-8">
                               <select className="selectpicker" data-live-search="true" title="Select a Column">
                                 <option>Column1</option>
                                <option>Column2</option>
                               </select>
                           </div>
                          </div>

                          <div className = "row select">
                            <div className ="col-md-4">
                              Row
                            </div>
                            <div className ="col-md-8">
                                <select className="selectpicker" data-live-search="true" title="Select a Row">
                                  <option>Row1</option>
                                 <option>Row2</option>
                                </select>
                            </div>
                           </div>


                       </div>
                      <div className = "col-md-4">
                        <div className = "row reset">
                          <button type="button" className="btn btn-default btn-lg">
                            <span className="glyphicon glyphicon-ok" aria-hidden="true" ></span>
                             Submit
                          </button>
                        </div>
                        <div className = "row reset">
                          <button type="button" className="btn btn-default btn-lg">
                            <span className="glyphicon glyphicon-repeat" aria-hidden="true"></span>
                             Reset
                          </button>
                        </div>
                      </div>
                     </div>
                  </div>
              <div className="tab-pane" id="tab_b">
                   <h4>Add</h4>
                   <div className = "row">
                     <div className = "col-md-6">

                       <div className = "row select">
                         <div className ="col-md-4">
                           Macro Name
                         </div>
                         <div className ="col-md-8">

                           <div className="input-group">
                             <input type="text" className="form-control" placeholder="Name" aria-describedby="sizing-addon2" />
                           </div>
                         </div>
                        </div>

                        <div className = "row select">
                          <div className ="col-md-4">
                             Parameter 1
                           </div>
                          <div className ="col-md-8">

                            <div className="input-group">
                              <input type="text" className="form-control" placeholder="Parameter 1" aria-describedby="sizing-addon2" />
                            </div>
                          </div>
                        </div>

                        <div className = "row select">
                          <div className ="col-md-4">
                            Parameter 2
                         </div>
                         <div className ="col-md-8">

                           <div className="input-group">
                             <input type="text" className="form-control" placeholder="Parameter 2 (optional)" aria-describedby="sizing-addon2" />
                           </div>
                          </div>
                        </div>

                        <div className = "row select">
                          <div className ="col-md-4">
                              Parameter 3
                          </div>
                          <div className ="col-md-8">

                             <div className="input-group">
                               <input type="text" className="form-control" placeholder="Parameter 3 (optional)" aria-describedby="sizing-addon2" />
                             </div>
                           </div>
                          </div>

                         <div className = "row select">
                             <div className ="col-md-4">
                               Parameter 4
                             </div>
                             <div className ="col-md-8">

                               <div className="input-group">
                                 <input type="text" className="form-control" placeholder="Parameter 4 (optional)" aria-describedby="sizing-addon2" />
                               </div>
                             </div>
                          </div>
                       </div>
                      <div className = "col-md-4">
                        <div className = "row reset">
                          <button type="button" className="btn btn-default btn-lg" >
                            <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                             Submit
                          </button>
                        </div>
                        <div className = "row reset">
                          <button type="button" className="btn btn-default btn-lg">
                            <span className="glyphicon glyphicon-repeat" aria-hidden="true"></span>
                             Reset
                          </button>
                        </div>
                      </div>
                     </div>
                  </div>
              <div className="tab-pane" id="tab_c">
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
                            Date
                          </div>
                          <div className ="col-md-8">

                            <div className="input-group" >
                              <input type="text" className="form-control" placeholder="Date" aria-describedby="sizing-addon2 " />
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
                            <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                             Submit
                          </button>
                        </div>
                        <div className = "row reset">
                          <button type="button" className="btn btn-default btn-lg">
                            <span className="glyphicon glyphicon-repeat" aria-hidden="true"></span>
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
                            <span className="glyphicon glyphicon-ok" aria-hidden="true" ></span>
                             Submit
                          </button>
                        </div>
                        <div className = "row reset">
                          <button type="button" className="btn btn-default btn-lg">
                            <span className="glyphicon glyphicon-repeat" aria-hidden="true"></span>
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
