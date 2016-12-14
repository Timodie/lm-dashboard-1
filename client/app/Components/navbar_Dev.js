import React from 'react';

export default class NavbarDev extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      position : 'developer'
    };
  }

  onMain() {
    this.context.router.push({
      pathname: "Main",
      state: {rolecheck : this.state.position}
    });
  }

  gotomain(e) {
    e.preventDefault();
    this.onMain();
  }

  onStatus() {
    this.context.router.push({
      pathname: "Macro_Status",
      state: {rolecheck : this.state.position}
    });
  }

  gotoStatus(e) {
    e.preventDefault();
    this.onStatus();
  }

  onSignout() {
    this.context.router.push({
      pathname: "Sign-In"
    });
  }

  gotoSign(e) {
    e.preventDefault();
    this.onSignout();
  }


render(){
  return(
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand"/>
          <img alt="Liberty Mutual Dashboard" src="img/liberty-mutual-logo-no-bg.png"/>
        </div>
        <div className="collapse navbar-collapse pull-right" >
          <ul className="nav navbar-nav">
            <button type="button" className="btn btn-default buttons" onClick={(e) => this.gotomain(e)}>Main</button>
            <button type="button" className="btn btn-default buttons" onClick={(e) => this.gotoStatus(e)}>Macro Status</button>
            <button type="button" className="btn btn-default buttons" onClick={(e) => this.gotoSign(e)}>Sign Out</button>
          </ul>
        </div>
      </div>
    </nav>

  );
}
}


NavbarDev.contextTypes = {
  router: React.PropTypes.object.isRequired
};
