import React from 'react';
import Select from 'react-select';
import {showfield} from '../util.js';
import {submitUpdateMacroToServer,submitDeleteMacroToServer} from '../server.js';


export default class MainPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      approver_field: "",
      approver_field2: "",
      macroname_field : "",
      macroname_field2 : "",
      date : false,
      date_field : "",
      time : false,
      time_field : "",
      auditid : false,
      auditid_field : "",
      description : false,
      description_field : "",
      runname : false,
      runname_field : "",
      valstart : false,
      valstart_field : "",
      valend : false,
      valend_field : "",
      groupnum : false,
      groupnum_field : "",
      sladate : false,
      sladate_field : "",
      slatime : false,
      slatime_field : "",
      asid : false,
      asid_field : "",
      dsid : false,
      dsid_field : "",
      runname2 : false,
      runname_field2 : "",
      dsid2 : false,
      dsid_field2 : "",
      groupnum2 : false,
      groupnum_field2 : "",
      statuscode : false,
      statuscode_field : ""
    };


  }

  handleMacro(newvalue) {
    this.setState({macroname_field: newvalue});
    this.setState({date : false, time : false, auditid : false, description : false, runname : false, valstart : false, valend : false,  groupnum : false,
    sladate : false, slatime : false, asid : false, dsid : false, runname2 : false, dsid2 : false, groupnum2 : false, statuscode : false});
    if (newvalue === "Schedule Start time by Run Name and Audit ID"){
      this.setState({runname:true, auditid:true, time:true});
      }
    if (newvalue === "Status Code by Run Name and Audit ID"){
      this.setState({runname:true, auditid:true, statuscode:true});
      }
    if (newvalue === "Valuation End Date by Run Name and Audit ID"){
        this.setState({runname:true, auditid:true, valend:true});
      }
    if (newvalue === "Valuation Start time by Run Name and Audit ID"){
        this.setState({runname:true, auditid:true, valstart:true});
      }
    if (newvalue === "SLA Date and Time by Audit ID"){
        this.setState({sladate:true, slatime:true, auditid:true, description:true});
      }
    if (newvalue === "SLA Date and Time by Run Name"){
        this.setState({runname:true, slatime:true});
      }
    if (newvalue === "Historical SLA Date and Time by Run Name"){
          this.setState({runname:true, slatime:true});
      }
    if (newvalue === "Run Status Code by Run Name and Group Number"){
        this.setState({runname:true, groupnum:true, statuscode:true});
      }
    if (newvalue === "Run Status Code by Run Name and Driver Step Detail ID"){
        this.setState({runname:true, dsid:true, statuscode:true});
      }
    if (newvalue === "Active Step Indicator by Driver Step ID"){
        this.setState({dsid:true, asid:true});
      }
    if (newvalue === "Active Step Indicator by Run Name and Driver Step ID"){
        this.setState({runname:true, dsid:true, asid:true});
      }
    if (newvalue === "Active Step Indicator by Run Name"){
        this.setState({runname:true, asid:true});
      }
    if (newvalue === "Active Step Indicator by Run Name and Group Number"){
        this.setState({runname:true, groupnum:true, asid:true});
      }
  }

  handleMacro2(newvalue) {
    this.setState({macroname_field2: newvalue});
    this.setState({date : false, time : false, auditid : false, description : false, runname : false, valstart : false, valend : false,  groupnum : false,
    sladate : false, slatime : false, asid : false, dsid : false, runname2 : false, dsid2 : false, groupnum2 : false, statuscode : false});
    if (newvalue === "All Schedule entries by Run Name"){
      this.setState({runname2:true});
      }
    if (newvalue === "All Step entries by Run Name"){
        this.setState({runname2:true});
      }
    if (newvalue === "All Schedule entries by Run Name and Group Number"){
          this.setState({runname2:true, groupnum2:true});
    }
    if (newvalue === "All Schedule entries by Run Name and Driver Step ID"){
        this.setState({runname2:true, dsid2:true});
      }
   if (newvalue === "All Step Detail entries by Run Name"){
          this.setState({runname2:true});
      }
  }

  handleApprover(newvalue) {
    this.setState({approver_field: newvalue});
  }

  handleApprover2(newvalue) {
    this.setState({approver_field2: newvalue});
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
  submitUpdate(e){
  e.preventDefault();
<<<<<<< HEAD
  alert("checking rolecheck");
  alert(this.role);
}
  submitDelete(e){
    e.preventDefault();
=======
  var macro_title = this.state.macroname_field;
  var parameters = [];
  if (this.state.sladate){
      parameters.push(this.state.sladate_field);
    }
  if (this.state.slatime){
      parameters.push(this.state.slatime_field);
    }
  if (this.state.runname){
      parameters.push(this.state.runname);
    }
  if (this.state.groupnum){
      parameters.push(this.state.groupnum_field);
    }
  if (this.state.auditid){
      parameters.push(this.state.auditid_field);
    }
  if (this.state.dsid){
      parameters.push(this.state.dsid_field);
    }
  if (this.state.asid){
      parameters.push(this.state.asid_field);
    }
  if (this.state.time){
      parameters.push(this.state.time_field);
    }
  if (this.state.valstart){
      parameters.push(this.state.valstart_field);
    }
  if (this.state.valend){
      parameters.push(this.state.valend_field);
    }
  if (this.state.statuscode){
      parameters.push(this.state.statuscode_field);
    }
  if (this.state.description){
      parameters.push(this.state.description_field);
    }
  var approver = this.state.approver_field;
  var cb = e;
  submitUpdateMacroToServer(macro_title,parameters,approver,cb);
}
  submitDelete(e){
    e.preventDefault();
    var macro_title = this.state.macroname_field2;
    var parameters = [];
    if (this.state.runname2){
        parameters.push(this.state.runname_field2);
      }
    if (this.state.groupnum2){
        parameters.push(this.state.groupnum_field2);
      }
    if (this.state.dsid2){
        parameters.push(this.state.dsid_field2);
      }
    var approver = this.state.approver_field2;
    var cb = e;
    submitDeleteMacroToServer(macro_title,parameters,approver,cb);
>>>>>>> 19f745d76d0c065f13febac9da5f9e18b17db541
}


  render() {


    var UpdateOptions = [
      { value: 'Schedule Start time by Run Name and Audit ID', label: 'Schedule Start time by Run Name and Audit ID'},
      { value: 'Status Code by Run Name and Audit ID', label: 'Status Code by Run Name and Audit ID'},
      { value: 'Valuation End Date by Run Name and Audit ID', label: 'Valuation End Date by Run Name and Audit ID'},
      { value: 'Valuation Start time by Run Name and Audit ID', label: 'Valuation Start time by Run Name and Audit ID'},
      { value: 'SLA Date and Time by Audit ID', label: 'SLA Date and Time by Audit ID'},
      { value: 'SLA Date and Time by Run Name', label: 'SLA Date and Time by Run Name'},
      { value: 'Run Status Code by Run Name and Group Number', label: 'Run Status Code by Run Name and Group Number'},
      { value: 'Run Status Code by Run Name and Driver Step Detail ID', label: 'Run Status Code by Run Name and Driver Step Detail ID'},
      { value: 'Active Step Indicator by Driver Step ID', label: 'Active Step Indicator by Driver Step ID'},
      { value: 'Active Step Indicator by Run Name and Driver Step ID', label: 'Active Step Indicator by Run Name and Driver Step ID'},
      { value: 'Active Step Indicator by Run Name', label: 'Active Step Indicator by Run Name'},
      { value: 'Active Step Indicator by Run Name and Group Number', label: 'Active Step Indicator by Run Name and Group Number'}
    ];
    var DeleteOptions = [
      { value: 'All Schedule entries by Run Name', label: 'All Schedule entries by Run Name'},
      { value: 'All Step entries by Run Name', label: 'All Step entries by Run Name'},
      { value: 'All Schedule entries by Run Name and Group Number', label: 'All Schedule entries by Run Name and Group Number'},
      { value: 'All Schedule entries by Run Name and Driver Step ID', label: 'All Schedule entries by Run Name and Driver Step ID'},
      { value: 'All Step Detail entries by Run Name', label: 'All Step Detail entries by Run Name'}
    ];
    var Approver = [
      { value: 'ericgendreau', label: 'ericgendreau'},
      { value: 'timmodie', label: 'timmodie'}
    ]

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
              <div className = "col-md-10">

                <div className = "row select">
                  <div className ="col-md-4">
                    Macro Name
                  </div>
                  <div className ="col-md-8">
                    <Select name="selected-state" simpleValue value={this.state.macroname_field} options={UpdateOptions} onChange={(newvalue) => this.handleMacro(newvalue)} />
                  </div>
                </div>

                <div className = "row select">
                  <div className ="col-md-4">
                    Approver
                  </div>
                  <div className ="col-md-8">
                    <Select name="selected-state" simpleValue value={this.state.approver_field} options={Approver} onChange={(newvalue) => this.handleApprover(newvalue)} />
                  </div>
                </div>

                <div className = {"row select " + showfield(this.state.runname)}>
                  <div className ="col-md-4">
                    Run Name
                  </div>
                  <div className ="col-md-8">
                    <input type="text" className="form-control" placeholder="Run Name" value={this.state.runname_field} onChange={(e) => this.handleRunName(e)} aria-describedby="sizing-addon2 " />
                  </div>

                </div>

                <div className = {"row select " + showfield(this.state.date)}>
                  <div className ="col-md-4">
                    Schedule Start Time
                  </div>
                  <div className ="col-md-8">
                    <input type="text" className="form-control" placeholder="Start Time" value={this.state.date_field} onChange={(e) => this.handleDate(e)} aria-describedby="sizing-addon2 " />
                  </div>
                </div>

                <div className = {"row select " + showfield(this.state.valstart)}>
                  <div className ="col-md-4">
                    Valuation Start
                  </div>
                  <div className ="col-md-8">
                    <input type="text" className="form-control" placeholder="Time" value={this.state.valstart_field} onChange={(e) => this.handleValStart(e)} aria-describedby="sizing-addon2 " />
                  </div>
                </div>

                <div className = {"row select " + showfield(this.state.valend)}>
                  <div className ="col-md-4">
                    Valuation End Date
                  </div>
                  <div className ="col-md-8">
                    <input type="text" className="form-control" placeholder="End Date" value={this.state.valend_field} onChange={(e) => this.handleValEnd(e)} aria-describedby="sizing-addon2 " />
                  </div>
                </div>


                <div className = {"row select " + showfield(this.state.auditid)}>
                  <div className ="col-md-4">
                    Audit ID
                  </div>
                  <div className ="col-md-8">
                    <input type="text" className="form-control" placeholder="Audit ID" value={this.state.auditid_field} onChange={(e) => this.handleAuditID(e)} aria-describedby="sizing-addon2 " />
                  </div>
                </div>

                <div className = {"row select " + showfield(this.state.groupnum)}>
                  <div className ="col-md-4">
                    Group Number
                  </div>
                  <div className ="col-md-8">
                    <input type="text" className="form-control" placeholder="Group Number" value={this.state.groupnum_field} onChange={(e) => this.handleGroupNum(e)} aria-describedby="sizing-addon2 " />
                  </div>
                </div>

                <div className = {"row select " + showfield(this.state.statuscode)}>
                  <div className ="col-md-4">
                    Status Code
                  </div>
                  <div className ="col-md-8">
                    <input type="text" className="form-control" placeholder="Status Code" value={this.state.statuscode_field} onChange={(e) => this.handleStatusCode(e)} aria-describedby="sizing-addon2 " />
                  </div>
                </div>

                <div className = {"row select " + showfield(this.state.sladate)}>
                  <div className ="col-md-4">
                    SLA Date
                  </div>
                  <div className ="col-md-8">
                    <input type="text" className="form-control" placeholder="SLA Date" value={this.state.sladate_field} onChange={(e) => this.handleSLADate(e)} aria-describedby="sizing-addon2 " />
                  </div>
                </div>

                <div className = {"row select " + showfield(this.state.slatime)}>
                  <div className ="col-md-4">
                    SLA Time
                  </div>
                  <div className ="col-md-8">
                    <input type="text" className="form-control" placeholder="SLA Time" value={this.state.slatime_field} onChange={(e) => this.handleSLATime(e)} aria-describedby="sizing-addon2 " />
                  </div>
                </div>

                <div className = {"row select " + showfield(this.state.dsid)}>
                  <div className ="col-md-4">
                    Driver Step ID
                  </div>
                  <div className ="col-md-8">
                    <input type="text" className="form-control" placeholder="Driver Step ID" value={this.state.dsid_field} onChange={(e) => this.handleDSID(e)} aria-describedby="sizing-addon2 " />
                  </div>
                </div>

                <div className = {"row select " + showfield(this.state.asid)}>
                  <div className ="col-md-4">
                    Active Step Indicator
                  </div>
                  <div className ="col-md-8">
                    <input type="text" className="form-control" placeholder="Active Step Indicator" value={this.state.asid_field} onChange={(e) => this.handleASID(e)} aria-describedby="sizing-addon2 " />
                  </div>
                </div>

                <div className = {"row select " + showfield(this.state.description)}>
                  <div className ="col-md-4">
                    Description
                  </div>
                  <div className ="col-md-8">
                    <input type="text" className="form-control" placeholder="Description" value={this.state.description_field} onChange={(e) => this.handleDescription(e)} aria-describedby="sizing-addon2 " />
                  </div>
                </div>
              </div>
              <div className = "row reset">
                <div className ="col-md-3">
                  <button type="button" className="btn btn-default btn-md" onClick ={(e) => this.refreshPage(e)}>
                    <span className="glyphicon glyphicon-repeat thisglyph" aria-hidden="true"></span>
                    Reset
                  </button>
                </div>
                <div className ="col-md-3 col-md-offset-5">
                  <button type="button" className="btn btn-default btn-md" onClick ={(e) => this.submitUpdate(e)}>
                    <span className="glyphicon glyphicon-ok thisglyph" aria-hidden="true"></span>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab_d">
            <h4>Delete</h4>
            <div className = "row">
              <div className = "col-md-10">

                <div className = "row select">
                  <div className ="col-md-4">
                    Macro Name
                  </div>
                  <div className ="col-md-8">
                    <Select name="selected-state" simpleValue value={this.state.macroname_field2} options={DeleteOptions} onChange={(newvalue) => this.handleMacro2(newvalue)} />
                  </div>
                </div>

                <div className = "row select">
                  <div className ="col-md-4">
                    Approver
                  </div>
                  <div className ="col-md-8">
                    <Select name="selected-state" simpleValue value={this.state.approver_field2} options={Approver} onChange={(newvalue) => this.handleApprover2(newvalue)} />
                  </div>
                </div>

                <div className = {"row select " + showfield(this.state.runname2)}>
                  <div className ="col-md-4">
                    Run Name
                  </div>
                  <div className ="col-md-8">
                    <input type="text" className="form-control" placeholder="Run Name" value={this.state.runname_field2} onChange={(e) => this.handleRunName2(e)} aria-describedby="sizing-addon2 " />
                  </div>
                </div>

                <div className = {"row select " + showfield(this.state.groupnum2)}>
                  <div className ="col-md-4">
                    Group Number
                  </div>
                  <div className ="col-md-8">
                    <input type="text" className="form-control" placeholder="Group Number" value={this.state.groupnum_field2} onChange={(e) => this.handleGroupNum2(e)} aria-describedby="sizing-addon2 " />
                  </div>
                </div>

                <div className = {"row select " + showfield(this.state.dsid2)}>
                  <div className ="col-md-4">
                    Driver Step ID
                  </div>
                  <div className ="col-md-8">
                    <input type="text" className="form-control" placeholder="Driver Step ID" value={this.state.dsid_field2} onChange={(e) => this.handleDSID2(e)} aria-describedby="sizing-addon2 " />
                  </div>
                </div>
              </div>
              <div className = "row reset">
                <div className ="col-md-3">
                  <button type="button" className="btn btn-default btn-md" onClick ={(e) => this.refreshPage(e)}>
                    <span className="glyphicon glyphicon-repeat thisglyph" aria-hidden="true"></span>
                    Reset
                  </button>
                </div>
                <div className ="col-md-3 col-md-offset-5">
                  <button type="button" className="btn btn-default btn-md" onClick ={(e) =>this.submitDelete(e)}>
                    <span className="glyphicon glyphicon-ok thisglyph" aria-hidden="true"></span>
                    Submit


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
