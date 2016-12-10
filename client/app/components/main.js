import React from 'react';
import ReactDOM from 'react-dom';

class MainPanel extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>Main Page</h1>
        </div>
      <ul className="nav nav-pills nav-stacked col-md-2">
        <li class="active"><a href="#tab_a" data-toggle="pill">View Data</a></li>
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
                           <div className="dropdown">
                             <button className="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                               <div style="float:left">
                               Select a Name
                             </div>
                               <div style="float:right">
                                 <span className="caret"></span>
                               </div>
                             </button>
                             <ul className="button-1-drop dropdown-menu">
                               <li><a href="#">ericgendreau</a></li>
                               <li><a href="#">gordananderson</a></li>
                             </ul>
                           </div>
                         </div>
                        </div>

                        <div className = "row select">
                          <div className ="col-md-4">
                             Table
                           </div>
                          <div className ="col-md-8">

                            <div className="dropdown">
                              <button className="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <div style="float:left">
                                Select a Table
                              </div>
                              <div style="float:right">
                                  <span className="caret"></span>
                              </div>
                              </button>
                              <ul className="button-1-drop dropdown-menu">
                                <li><a href="#">Table</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className = "row select">
                          <div className ="col-md-4">
                            Column
                         </div>
                         <div className ="col-md-8">

                           <div className="dropdown">
                             <button className="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                               <div style="float:left">
                               Select a Column
                             </div>
                               <div style="float:right">
                                 <span className="caret"></span>
                               </div>
                             </button>
                                <ul className="button-1-drop dropdown-menu">
                                  <li><a href="#">Column</a></li>
                                </ul>
                          </div>
                          </div>
                        </div>

                        <div className = "row select">
                          <div className ="col-md-4">
                              Row
                          </div>
                          <div className ="col-md-8">

                             <div className="dropdown">
                               <button className="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                 <div style="float:left">
                                 Select a Row
                               </div>
                                 <div style="float:right">
                                   <span className="caret"></span>
                                 </div>
                               </button>
                               <ul className="button-1-drop dropdown-menu">
                                 <li><a href="#">Row</a></li>
                               </ul>
                             </div>
                           </div>
                          </div>

                         <div className = "row select">
                             <div className ="col-md-4">
                               WHERE
                             </div>
                             <div className ="col-md-8">

                               <div className="dropdown">
                                 <button className="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                   <div style="float:left">
                                   Select a WHERE
                                  </div>
                                   <div style="float:right">
                                     <span className="caret"></span>
                                   </div>
                                 </button>
                                 <ul className="button-1-drop dropdown-menu">
                                   <li><a href="#">WHERE</a></li>
                                 </ul>
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
                             <input type="text" className="form-control" placeholder="Name" aria-describedby="sizing-addon2">
                           </div>
                         </div>
                        </div>

                        <div className = "row select">
                          <div className ="col-md-4">
                             Table
                           </div>
                          <div className ="col-md-8">
                            <!-- Split button -->
                            <div className="input-group">
                              <input type="text" className="form-control" placeholder="Table" aria-describedby="sizing-addon2">
                            </div>
                          </div>
                        </div>

                        <div className = "row select">
                          <div className ="col-md-4">
                            Column
                         </div>
                         <div className ="col-md-8">
                           <!-- Split button -->
                           <div className="input-group">
                             <input type="text" className="form-control" placeholder="Column" aria-describedby="sizing-addon2">
                           </div>
                          </div>
                        </div>

                        <div className = "row select">
                          <div className ="col-md-4">
                              Row
                          </div>
                          <div className ="col-md-8">
                             <!-- Split button -->
                             <div className="input-group">
                               <input type="text" className="form-control" placeholder="Row" aria-describedby="sizing-addon2">
                             </div>
                           </div>
                          </div>

                         <div className = "row select">
                             <div className ="col-md-4">
                               WHERE
                             </div>
                             <div className ="col-md-8">
                               <!-- Split button -->
                               <div className="input-group">
                                 <input type="text" className="form-control" placeholder="WHERE" aria-describedby="sizing-addon2">
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
                           <!-- Split button -->
                           <div className="dropdown">
                             <button className="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                               <div className= "selector" style="float:left">
                               Select a Name
                              </div>
                               <div style="float:right">
                                 <span className="caret"></span>
                               </div>
                             </button>
                             <ul className="button-1-drop dropdown-menu">
                               <li><a href="#">ericgendreau</a></li>
                               <li><a href="#">gordananderson</a></li>
                             </ul>
                           </div>
                         </div>
                        </div>

                        <div className = "row select">
                          <div className ="col-md-4">
                             Table
                           </div>
                          <div className ="col-md-8">
                            <!-- Split button -->
                            <div className="dropdown">
                              <button className="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <div style="float:left">
                                Select a Table
                                </div>
                                <div style="float:right">
                                  <span className="caret"></span>
                                </div>
                              </button>
                              <ul className="button-1-drop dropdown-menu">
                                <li><a href="#">Table</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className = "row select">
                          <div className ="col-md-4">
                            Column
                         </div>
                         <div className ="col-md-8">
                           <!-- Split button -->
                           <div className="dropdown">
                             <button className="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                               <div style="float:left">
                               Select a Column
                             </div>
                               <div style="float:right">
                                 <span className="caret"></span>
                               </div>
                             </button>
                                <ul className="button-1-drop dropdown-menu">
                                  <li><a href="#">Column</a></li>
                                </ul>
                          </div>
                          </div>
                        </div>

                        <div className = "row select">
                          <div className ="col-md-4">
                              Row
                          </div>
                          <div className ="col-md-8">
                             <!-- Split button -->
                             <div className="dropdown">
                               <button className="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                 <div style="float:left">
                                 Select a Row
                                </div>
                                 <div style="float:right">
                                   <span className="caret"></span>
                                 </div>
                               </button>
                               <ul className="button-1-drop dropdown-menu">
                                 <li><a href="#">Row</a></li>
                               </ul>
                             </div>
                           </div>
                          </div>

                         <div className = "row select">
                             <div className ="col-md-4">
                               WHERE
                             </div>
                             <div className ="col-md-8">
                               <!-- Split button -->
                               <div className="dropdown">
                                 <button className="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                   <div style="float:left">
                                   Select a WHERE
                                 </div>
                                   <div style="float:right">
                                     <span className="caret"></span>
                                   </div>
                                 </button>
                                 <ul className="button-1-drop dropdown-menu">
                                   <li><a href="#">WHERE</a></li>
                                 </ul>
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
                           Name
                         </div>
                         <div className ="col-md-8">
                           <!-- Split button -->
                           <div className="dropdown">
                             <button className="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                               <div className= "selector" style="float:left">
                               Select a Name
                              </div>
                               <div style="float:right">
                                 <span className="caret"></span>
                               </div>
                             </button>
                             <ul className="button-1-drop dropdown-menu">
                               <li><a href="#">ericgendreau</a></li>
                               <li><a href="#">gordananderson</a></li>
                             </ul>
                           </div>
                         </div>
                        </div>

                        <div className = "row select">
                          <div className ="col-md-4">
                             Table
                           </div>
                          <div className ="col-md-8">
                            <!-- Split button -->
                            <div className="dropdown">
                              <button className="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <div style="float:left">
                                Select a Table
                              </div>
                                <div style="float:right">
                                  <span className="caret"></span>
                                </div>
                              </button>
                              <ul className="button-1-drop dropdown-menu">
                                <li><a href="#">Table</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className = "row select">
                          <div className ="col-md-4">
                            Column
                         </div>
                         <div className ="col-md-8">
                           <!-- Split button -->
                           <div className="dropdown">
                             <button className="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                               <div style="float:left">
                               Select a Column
                             </div>
                               <div style="float:right">
                                 <span className="caret"></span>
                               </div>
                             </button>
                                <ul className="button-1-drop dropdown-menu">
                                  <li><a href="#">Column</a></li>
                                </ul>
                          </div>
                          </div>
                        </div>

                        <div className = "row select">
                          <div className ="col-md-4">
                              Row
                          </div>
                          <div className ="col-md-8">
                             <!-- Split button -->
                             <div className="dropdown">
                               <button className="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                 <div style="float:left">
                                 Select a Row
                               </div>
                                 <div style="float:right">
                                   <span className="caret"></span>
                                 </div>
                               </button>
                               <ul className="button-1-drop dropdown-menu">
                                 <li><a href="#">Row</a></li>
                               </ul>
                             </div>
                           </div>
                          </div>

                         <div className = "row select">
                             <div className ="col-md-4">
                               WHERE
                             </div>
                             <div className ="col-md-8">
                               <!-- Split button -->
                               <div className="dropdown">
                                 <button className="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                   <div style="float:left">
                                   Select a WHERE
                                  </div>
                                   <div style="float:right">
                                     <span className="caret"></span>
                                   </div>
                                 </button>
                                 <ul className="button-1-drop dropdown-menu">
                                   <li><a href="#">WHERE</a></li>
                                 </ul>
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
      </div><!-- tab content -->
      </div><!-- end of container -->
    );
  }
}

ReactDOM.render(
  <MainPanel />,
);
