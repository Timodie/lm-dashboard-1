import React from 'react';

export default class MainPanel extends React.Component {
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

                           <div className = "row select">
                             <div className ="col-md-4">
                               WHERE
                             </div>
                             <div className ="col-md-8">
                                 <select className="selectpicker" data-live-search="true" title="Select a WHERE">
                                   <option>Here</option>
                                  <option>There</option>
                                  <option>Everywhere</option>
                                 </select>
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
              <div className="tab-pane" id="tab_b">
                   <h4>Add</h4>
                   <div className = "row">
                     <div className = "col-md-6">

                       <div className = "row select">
                         <div className ="col-md-4">
                           Name
                         </div>
                         <div className ="col-md-8">

                           <div className="input-group">
                             <input type="text" className="form-control" placeholder="Name" aria-describedby="sizing-addon2" />
                           </div>
                         </div>
                        </div>

                        <div className = "row select">
                          <div className ="col-md-4">
                             Table
                           </div>
                          <div className ="col-md-8">

                            <div className="input-group">
                              <input type="text" className="form-control" placeholder="Table" aria-describedby="sizing-addon2" />
                            </div>
                          </div>
                        </div>

                        <div className = "row select">
                          <div className ="col-md-4">
                            Column
                         </div>
                         <div className ="col-md-8">

                           <div className="input-group">
                             <input type="text" className="form-control" placeholder="Column" aria-describedby="sizing-addon2" />
                           </div>
                          </div>
                        </div>

                        <div className = "row select">
                          <div className ="col-md-4">
                              Row
                          </div>
                          <div className ="col-md-8">

                             <div className="input-group">
                               <input type="text" className="form-control" placeholder="Row" aria-describedby="sizing-addon2" />
                             </div>
                           </div>
                          </div>

                         <div className = "row select">
                             <div className ="col-md-4">
                               WHERE
                             </div>
                             <div className ="col-md-8">

                               <div className="input-group">
                                 <input type="text" className="form-control" placeholder="WHERE" aria-describedby="sizing-addon2" />
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
              <div className="tab-pane" id="tab_c">
                   <h4>Update</h4>
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

                           <div className = "row select">
                             <div className ="col-md-4">
                               WHERE
                             </div>
                             <div className ="col-md-8">
                                 <select className="selectpicker" data-live-search="true" title="Select a WHERE">
                                   <option>Here</option>
                                  <option>There</option>
                                  <option>Everywhere</option>
                                 </select>
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

                           <div className = "row select">
                             <div className ="col-md-4">
                               WHERE
                             </div>
                             <div className ="col-md-8">
                                 <select className="selectpicker" data-live-search="true" title="Select a WHERE">
                                   <option>Here</option>
                                  <option>There</option>
                                  <option>Everywhere</option>
                                 </select>
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
      </div>
      </div>
    );
  }
}
