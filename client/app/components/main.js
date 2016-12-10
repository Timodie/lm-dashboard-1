import React from 'react';
import ReactDOM from 'react-dom';

class MainPanel extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <h1>Main Page</h1>
        </div>
      <ul class="nav nav-pills nav-stacked col-md-2">
        <li class="active"><a href="#tab_a" data-toggle="pill">View Data</a></li>
        <li><a href="#tab_b" data-toggle="pill">Add</a></li>
        <li><a href="#tab_c" data-toggle="pill">Update</a></li>
        <li><a href="#tab_d" data-toggle="pill">Delete</a></li>
      </ul>
      <div class="tab-content col-md-8">
              <div class="tab-pane active" id="tab_a">
                   <h4>View Data</h4>
                   <div class = "row">
                     <div class = "col-md-6">

                       <div class = "row select">
                         <div class ="col-md-4">
                           Name
                         </div>
                         <div class ="col-md-8">
                           <!-- Split button -->
                           <div class="dropdown">
                             <button class="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                               <div style="float:left">
                               Select a Name
                             </div>
                               <div style="float:right">
                                 <span class="caret"></span>
                               </div>
                             </button>
                             <ul class="button-1-drop dropdown-menu">
                               <li><a href="#">ericgendreau</a></li>
                               <li><a href="#">gordananderson</a></li>
                             </ul>
                           </div>
                         </div>
                        </div>

                        <div class = "row select">
                          <div class ="col-md-4">
                             Table
                           </div>
                          <div class ="col-md-8">
                            <!-- Split button -->
                            <div class="dropdown">
                              <button class="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <div style="float:left">
                                Select a Table
                              </div>
                              <div style="float:right">
                                  <span class="caret"></span>
                              </div>
                              </button>
                              <ul class="button-1-drop dropdown-menu">
                                <li><a href="#">Table</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div class = "row select">
                          <div class ="col-md-4">
                            Column
                         </div>
                         <div class ="col-md-8">
                           <!-- Split button -->
                           <div class="dropdown">
                             <button class="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                               <div style="float:left">
                               Select a Column
                             </div>
                               <div style="float:right">
                                 <span class="caret"></span>
                               </div>
                             </button>
                                <ul class="button-1-drop dropdown-menu">
                                  <li><a href="#">Column</a></li>
                                </ul>
                          </div>
                          </div>
                        </div>

                        <div class = "row select">
                          <div class ="col-md-4">
                              Row
                          </div>
                          <div class ="col-md-8">
                             <!-- Split button -->
                             <div class="dropdown">
                               <button class="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                 <div style="float:left">
                                 Select a Row
                               </div>
                                 <div style="float:right">
                                   <span class="caret"></span>
                                 </div>
                               </button>
                               <ul class="button-1-drop dropdown-menu">
                                 <li><a href="#">Row</a></li>
                               </ul>
                             </div>
                           </div>
                          </div>

                         <div class = "row select">
                             <div class ="col-md-4">
                               WHERE
                             </div>
                             <div class ="col-md-8">
                               <!-- Split button -->
                               <div class="dropdown">
                                 <button class="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                   <div style="float:left">
                                   Select a WHERE
                                  </div>
                                   <div style="float:right">
                                     <span class="caret"></span>
                                   </div>
                                 </button>
                                 <ul class="button-1-drop dropdown-menu">
                                   <li><a href="#">WHERE</a></li>
                                 </ul>
                               </div>
                             </div>
                          </div>
                       </div>
                      <div class = "col-md-4">
                        <div class = "row reset">
                          <button type="button" class="btn btn-default btn-lg">
                            <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                             Submit
                          </button>
                        </div>
                        <div class = "row reset">
                          <button type="button" class="btn btn-default btn-lg">
                            <span class="glyphicon glyphicon-repeat" aria-hidden="true"></span>
                             Reset
                          </button>
                        </div>
                      </div>
                     </div>
                  </div>
              <div class="tab-pane" id="tab_b">
                   <h4>Add</h4>
                   <div class = "row">
                     <div class = "col-md-6">

                       <div class = "row select">
                         <div class ="col-md-4">
                           Name
                         </div>
                         <div class ="col-md-8">
                           <!-- Split button -->
                           <div class="input-group">
                             <input type="text" class="form-control" placeholder="Name" aria-describedby="sizing-addon2">
                           </div>
                         </div>
                        </div>

                        <div class = "row select">
                          <div class ="col-md-4">
                             Table
                           </div>
                          <div class ="col-md-8">
                            <!-- Split button -->
                            <div class="input-group">
                              <input type="text" class="form-control" placeholder="Table" aria-describedby="sizing-addon2">
                            </div>
                          </div>
                        </div>

                        <div class = "row select">
                          <div class ="col-md-4">
                            Column
                         </div>
                         <div class ="col-md-8">
                           <!-- Split button -->
                           <div class="input-group">
                             <input type="text" class="form-control" placeholder="Column" aria-describedby="sizing-addon2">
                           </div>
                          </div>
                        </div>

                        <div class = "row select">
                          <div class ="col-md-4">
                              Row
                          </div>
                          <div class ="col-md-8">
                             <!-- Split button -->
                             <div class="input-group">
                               <input type="text" class="form-control" placeholder="Row" aria-describedby="sizing-addon2">
                             </div>
                           </div>
                          </div>

                         <div class = "row select">
                             <div class ="col-md-4">
                               WHERE
                             </div>
                             <div class ="col-md-8">
                               <!-- Split button -->
                               <div class="input-group">
                                 <input type="text" class="form-control" placeholder="WHERE" aria-describedby="sizing-addon2">
                               </div>
                             </div>
                          </div>
                       </div>
                      <div class = "col-md-4">
                        <div class = "row reset">
                          <button type="button" class="btn btn-default btn-lg">
                            <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                             Submit
                          </button>
                        </div>
                        <div class = "row reset">
                          <button type="button" class="btn btn-default btn-lg">
                            <span class="glyphicon glyphicon-repeat" aria-hidden="true"></span>
                             Reset
                          </button>
                        </div>
                      </div>
                     </div>
                  </div>
              <div class="tab-pane" id="tab_c">
                   <h4>Update</h4>
                   <div class = "row">
                     <div class = "col-md-6">

                       <div class = "row select">
                         <div class ="col-md-4">
                           Name
                         </div>
                         <div class ="col-md-8">
                           <!-- Split button -->
                           <div class="dropdown">
                             <button class="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                               <div class= "selector" style="float:left">
                               Select a Name
                              </div>
                               <div style="float:right">
                                 <span class="caret"></span>
                               </div>
                             </button>
                             <ul class="button-1-drop dropdown-menu">
                               <li><a href="#">ericgendreau</a></li>
                               <li><a href="#">gordananderson</a></li>
                             </ul>
                           </div>
                         </div>
                        </div>

                        <div class = "row select">
                          <div class ="col-md-4">
                             Table
                           </div>
                          <div class ="col-md-8">
                            <!-- Split button -->
                            <div class="dropdown">
                              <button class="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <div style="float:left">
                                Select a Table
                                </div>
                                <div style="float:right">
                                  <span class="caret"></span>
                                </div>
                              </button>
                              <ul class="button-1-drop dropdown-menu">
                                <li><a href="#">Table</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div class = "row select">
                          <div class ="col-md-4">
                            Column
                         </div>
                         <div class ="col-md-8">
                           <!-- Split button -->
                           <div class="dropdown">
                             <button class="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                               <div style="float:left">
                               Select a Column
                             </div>
                               <div style="float:right">
                                 <span class="caret"></span>
                               </div>
                             </button>
                                <ul class="button-1-drop dropdown-menu">
                                  <li><a href="#">Column</a></li>
                                </ul>
                          </div>
                          </div>
                        </div>

                        <div class = "row select">
                          <div class ="col-md-4">
                              Row
                          </div>
                          <div class ="col-md-8">
                             <!-- Split button -->
                             <div class="dropdown">
                               <button class="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                 <div style="float:left">
                                 Select a Row
                                </div>
                                 <div style="float:right">
                                   <span class="caret"></span>
                                 </div>
                               </button>
                               <ul class="button-1-drop dropdown-menu">
                                 <li><a href="#">Row</a></li>
                               </ul>
                             </div>
                           </div>
                          </div>

                         <div class = "row select">
                             <div class ="col-md-4">
                               WHERE
                             </div>
                             <div class ="col-md-8">
                               <!-- Split button -->
                               <div class="dropdown">
                                 <button class="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                   <div style="float:left">
                                   Select a WHERE
                                 </div>
                                   <div style="float:right">
                                     <span class="caret"></span>
                                   </div>
                                 </button>
                                 <ul class="button-1-drop dropdown-menu">
                                   <li><a href="#">WHERE</a></li>
                                 </ul>
                               </div>
                             </div>
                          </div>
                       </div>
                      <div class = "col-md-4">
                        <div class = "row reset">
                          <button type="button" class="btn btn-default btn-lg">
                            <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                             Submit
                          </button>
                        </div>
                        <div class = "row reset">
                          <button type="button" class="btn btn-default btn-lg">
                            <span class="glyphicon glyphicon-repeat" aria-hidden="true"></span>
                             Reset
                          </button>
                        </div>
                      </div>
                     </div>
              </div>
              <div class="tab-pane" id="tab_d">
                   <h4>Delete</h4>
                   <div class = "row">
                     <div class = "col-md-6">

                       <div class = "row select">
                         <div class ="col-md-4">
                           Name
                         </div>
                         <div class ="col-md-8">
                           <!-- Split button -->
                           <div class="dropdown">
                             <button class="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                               <div class= "selector" style="float:left">
                               Select a Name
                              </div>
                               <div style="float:right">
                                 <span class="caret"></span>
                               </div>
                             </button>
                             <ul class="button-1-drop dropdown-menu">
                               <li><a href="#">ericgendreau</a></li>
                               <li><a href="#">gordananderson</a></li>
                             </ul>
                           </div>
                         </div>
                        </div>

                        <div class = "row select">
                          <div class ="col-md-4">
                             Table
                           </div>
                          <div class ="col-md-8">
                            <!-- Split button -->
                            <div class="dropdown">
                              <button class="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <div style="float:left">
                                Select a Table
                              </div>
                                <div style="float:right">
                                  <span class="caret"></span>
                                </div>
                              </button>
                              <ul class="button-1-drop dropdown-menu">
                                <li><a href="#">Table</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div class = "row select">
                          <div class ="col-md-4">
                            Column
                         </div>
                         <div class ="col-md-8">
                           <!-- Split button -->
                           <div class="dropdown">
                             <button class="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                               <div style="float:left">
                               Select a Column
                             </div>
                               <div style="float:right">
                                 <span class="caret"></span>
                               </div>
                             </button>
                                <ul class="button-1-drop dropdown-menu">
                                  <li><a href="#">Column</a></li>
                                </ul>
                          </div>
                          </div>
                        </div>

                        <div class = "row select">
                          <div class ="col-md-4">
                              Row
                          </div>
                          <div class ="col-md-8">
                             <!-- Split button -->
                             <div class="dropdown">
                               <button class="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                 <div style="float:left">
                                 Select a Row
                               </div>
                                 <div style="float:right">
                                   <span class="caret"></span>
                                 </div>
                               </button>
                               <ul class="button-1-drop dropdown-menu">
                                 <li><a href="#">Row</a></li>
                               </ul>
                             </div>
                           </div>
                          </div>

                         <div class = "row select">
                             <div class ="col-md-4">
                               WHERE
                             </div>
                             <div class ="col-md-8">
                               <!-- Split button -->
                               <div class="dropdown">
                                 <button class="btn btn-default button-1 dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                   <div style="float:left">
                                   Select a WHERE
                                  </div>
                                   <div style="float:right">
                                     <span class="caret"></span>
                                   </div>
                                 </button>
                                 <ul class="button-1-drop dropdown-menu">
                                   <li><a href="#">WHERE</a></li>
                                 </ul>
                               </div>
                             </div>
                          </div>
                       </div>
                      <div class = "col-md-4">
                        <div class = "row reset">
                          <button type="button" class="btn btn-default btn-lg">
                            <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                             Submit
                          </button>
                        </div>
                        <div class = "row reset">
                          <button type="button" class="btn btn-default btn-lg">
                            <span class="glyphicon glyphicon-repeat" aria-hidden="true"></span>
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
