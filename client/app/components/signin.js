import React from 'react';
export default class SignIn extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      position : 'developer',
      usernamevalue : '',
      passwordvalue : ''
    };
  }

  handlePositionChange(e) {
    e.preventDefault();
    this.setState({
      position : e.target.value
    });
  }

  handleUsernameChange(e) {
    e.preventDefault();
    this.setState({
      usernamevalue : e.target.value
    });
  }

  handlePasswrodChange(e) {
    e.preventDefault();
    this.setState({
      passwordvalue : e.target.value
    });
  }

  onSearch() {
    this.context.router.push({
      pathname: "Main",
      state: {rolecheck : this.state.position}
    });
  }

  gotomain(e) {
    e.preventDefault();
    if (this.state.usernamevalue != '' && this.state.passwordvalue != '') {
      this.onSearch();
    }
    else {
      alert("Username or Password is empty, please check!");
      this.setState({
        usernamevalue : this.state.usernamevalue,
        passwordvalue : this.state.passwordvalue
      });
    }
  }


render (){
return (
  <div id="fullscreen_bg" className="fullscreen_bg">
    <form className="form-signin">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="panel panel-default">
              <div className="panel-body">
                  <h3 className="text-center">
                  SIGN IN</h3>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span>
                      </span>
                      <input type="text" className="form-control" placeholder="Username" value={this.state.usernamevalue} onChange={(e) => this.handleUsernameChange(e)}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
                      <input type="password" className="form-control" placeholder="Password" value={this.state.passwordvalue} onChange={(e) => this.handlePasswrodChange(e)}/>
                    </div>
                  </div>
                  I am
                  <select className="alternative_select" value={this.state.position} onChange={(e) => this.handlePositionChange(e)}>
                    <option value="developer">Developer</option>
                    <option value="admin">Administrator</option>
                  </select>
                  <button className="btn btn-lg btn-primary btn-block" onClick={(e) => this.gotomain(e)} type="submit"> Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
    );
    }

    }

    SignIn.contextTypes = {
      router: React.PropTypes.object.isRequired
    };
