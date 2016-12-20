import React from 'react';

export default class MainPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      approver_field: "All",
      approver_field2: "All",
      macroname_field : "",
      macroname_field2 : "",
      date_field : "",
      time_field : "",
      auditid_field : "",
      description_field : "",
      runname_field : "",
      valstart_field : "",
      valend_field : "",
      groupnum_field : "",
      sladate_field : "",
      slatime_field : "",
      asid_field : "",
      dsid_field : "",
      runname_field2 : "",
      dsid_field2 : "",
      groupnum_field2 : "",
      statuscode_field : ""
    };
  }

  handleMacro(e) {
    e.preventDefault();
    this.setState({macroname_field: e.target.value});
  }

  handleMacro2(e) {
    e.preventDefault();
    this.setState({macroname_field2: e.target.value});
  }

  handleApprover(e) {
    e.preventDefault();
    this.setState({approver_field: e.target.value});
  }

  handleApprover2(e) {
    e.preventDefault();
    this.setState({approver_field2: e.target.value});
  }

  handleDate(e) {
    e.preventDefault();
    this.setState({date_field: e.target.value});
  }

  handleTime(e) {
    e.preventDefault();
    this.setState({time_field: e.target.value});
  }

  handleAuditID(e) {
    e.preventDefault();
    this.setState({auditid_field: e.target.value});
  }

  handleDescription(e) {
    e.preventDefault();
    this.setState({description_field: e.target.value});
  }

  handleRunName(e) {
    e.preventDefault();
    this.setState({runname_field: e.target.value});
  }

  handleRunName2(e) {
    e.preventDefault();
    this.setState({runname_field2: e.target.value});
  }

  handleValStart(e) {
    e.preventDefault();
    this.setState({valstart_field: e.target.value});
  }

  handleValEnd(e) {
    e.preventDefault();
    this.setState({valend_field: e.target.value});
  }

  handleGroupNum(e) {
    e.preventDefault();
    this.setState({groupnum_field: e.target.value});
  }

  handleGroupNum2(e) {
    e.preventDefault();
    this.setState({groupnum_field2: e.target.value});
  }

  handleSLADate(e) {
    e.preventDefault();
    this.setState({sladate_field: e.target.value});
  }

  handleSLATime(e) {
    e.preventDefault();
    this.setState({slatime_field: e.target.value});
  }

  handleASID(e) {
    e.preventDefault();
    this.setState({asid_field: e.target.value});
  }

  handleDSID(e) {
    e.preventDefault();
    this.setState({dsid_field: e.target.value});
  }

  handleDSID2(e) {
    e.preventDefault();
    this.setState({dsid_field2: e.target.value});
  }

  handleStatusCode(e) {
    e.preventDefault();
    this.setState({statuscode_field: e.target.value});
  }
  refreshPage(e){
    e.preventDefault();
    window.location.reload();
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
                    <select className="selectpicker" data-live-search="true" value={this.state.macroname_field} onChange={(e) => this.handleMacro(e)} title="Select Update Macro">
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
                    <select className="selectpicker" data-live-search="true" value={this.state.approver_field} onChange={(e) => this.handleApprover(e)}>
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
                      <input type="text" className="form-control" placeholder="Run Name" value={this.state.runname_field} onChange={(e) => this.handleRunName(e)} aria-describedby="sizing-addon2 " />
                    </div>
                  </div>
                </div>

                <div className = "row select">
                  <div className ="col-md-4">
                    Schedule Start Time
                  </div>
                  <div className ="col-md-8">

                    <div className="input-group" >
                      <input type="text" className="form-control" placeholder="Start Time" value={this.state.date_field} onChange={(e) => this.handleDate(e)} aria-describedby="sizing-addon2 " />
                    </div>
                  </div>
                </div>

                <div className = "row select">
                  <div className ="col-md-4">
                    Valuation Start
                  </div>
                  <div className ="col-md-8">

                    <div className="input-group" >
                      <input type="text" className="form-control" placeholder="Time" value={this.state.valstart_field} onChange={(e) => this.handleValStart(e)} aria-describedby="sizing-addon2 " />
                    </div>
                  </div>
                </div>

                <div className = "row select">
                  <div className ="col-md-4">
                    Valuation End Date
                  </div>
                  <div className ="col-md-8">

                    <div className="input-group" >
                      <input type="text" className="form-control" placeholder="End Date" value={this.state.valend_field} onChange={(e) => this.handleValEnd(e)} aria-describedby="sizing-addon2 " />
                    </div>
                  </div>
                </div>


                <div className = "row select">
                  <div className ="col-md-4">
                    Audit ID
                  </div>
                  <div className ="col-md-8">

                    <div className="input-group" >
                      <input type="text" className="form-control" placeholder="Audit ID" value={this.state.auditid_field} onChange={(e) => this.handleAuditID(e)} aria-describedby="sizing-addon2 " />
                    </div>
                  </div>
                </div>

                <div className = "row select">
                  <div className ="col-md-4">
                    Group Number
                  </div>
                  <div className ="col-md-8">

                    <div className="input-group" >
                      <input type="text" className="form-control" placeholder="Group Number" value={this.state.groupnum_field} onChange={(e) => this.handleGroupNum(e)} aria-describedby="sizing-addon2 " />
                    </div>
                  </div>
                </div>

                <div className = "row select">
                  <div className ="col-md-4">
                    Status Code
                  </div>
                  <div className ="col-md-8">

                    <div className="input-group" >
                      <input type="text" className="form-control" placeholder="Status Code" value={this.state.statuscode_field} onChange={(e) => this.handleStatusCode(e)} aria-describedby="sizing-addon2 " />
                    </div>
                  </div>
                </div>

                <div className = "row select">
                  <div className ="col-md-4">
                    SLA Date
                  </div>
                  <div className ="col-md-8">

                    <div className="input-group" >
                      <input type="text" className="form-control" placeholder="SLA Date" value={this.state.sladate_field} onChange={(e) => this.handleSLADate(e)} aria-describedby="sizing-addon2 " />
                    </div>
                  </div>
                </div>

                <div className = "row select">
                  <div className ="col-md-4">
                    SLA Time
                  </div>
                  <div className ="col-md-8">

                    <div className="input-group" >
                      <input type="text" className="form-control" placeholder="SLA Time" value={this.state.slatime_field} onChange={(e) => this.handleSLATime(e)} aria-describedby="sizing-addon2 " />
                    </div>
                  </div>
                </div>

                <div className = "row select">
                  <div className ="col-md-4">
                    Driver Step ID
                  </div>
                  <div className ="col-md-8">

                    <div className="input-group" >
                      <input type="text" className="form-control" placeholder="Driver Step ID" value={this.state.dsid_field} onChange={(e) => this.handleDSID(e)} aria-describedby="sizing-addon2 " />
                    </div>
                  </div>
                </div>

                <div className = "row select">
                  <div className ="col-md-4">
                    Active Step Indicator
                  </div>
                  <div className ="col-md-8">

                    <div className="input-group" >
                      <input type="text" className="form-control" placeholder="Active Step Indicator" value={this.state.asid_field} onChange={(e) => this.handleASID(e)} aria-describedby="sizing-addon2 " />
                    </div>
                  </div>
                </div>

                <div className = "row select">
                  <div className ="col-md-4">
                    Description
                  </div>
                  <div className ="col-md-8">

                    <div className="input-group" >
                      <input type="text" className="form-control" placeholder="Description" value={this.state.description_field} onChange={(e) => this.handleDescription(e)} aria-describedby="sizing-addon2 " />
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
                  <button type="button" className="btn btn-default btn-lg" onClick ={(e) => this.refreshPage(e)}>
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
                    <select className="selectpicker" data-live-search="true" value={this.state.macroname_field2} onChange={(e) => this.handleMacro2(e)} title="Select Delete Macro">
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
                    <select className="selectpicker" value={this.state.approver_field2} onChange={(e) => this.handleApprover2(e)} data-live-search="true" >
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
                      <input type="text" className="form-control" placeholder="Run Name" value={this.state.runname_field2} onChange={(e) => this.handleRunName2(e)} aria-describedby="sizing-addon2 " />
                    </div>
                  </div>
                </div>

                <div className = "row select">
                  <div className ="col-md-4">
                    Group Number
                  </div>
                  <div className ="col-md-8">
                    <div className="input-group" >
                      <input type="text" className="form-control" placeholder="Group Number" value={this.state.groupnum_field2} onChange={(e) => this.handleGroupNum2(e)} aria-describedby="sizing-addon2 " />
                    </div>
                  </div>
                </div>

                <div className = "row select">
                  <div className ="col-md-4">
                    Driver Step ID
                  </div>
                  <div className ="col-md-8">
                    <div className="input-group" >
                      <input type="text" className="form-control" placeholder="Driver Step ID" value={this.state.dsid_field2} onChange={(e) => this.handleDSID2(e)} aria-describedby="sizing-addon2 " />
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
                  <button type="button" className="btn btn-default btn-lg" onClick ={(e) => this.refreshPage(e)}>
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
