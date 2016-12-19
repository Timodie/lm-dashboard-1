import React from 'react';
import {Link} from 'react';
export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      position : 'admin'
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

  onViewlog() {
    this.context.router.push({
      pathname: "View_log",
      state: {rolecheck : this.state.position}
    });
  }

  gotoViewlog(e) {
    e.preventDefault();
    this.onViewlog();
  }

  onPeer_Review() {
    this.context.router.push({
      pathname: "Peer_Review",
      state: {rolecheck : this.state.position}
    });
  }

  gotoPeer_Review(e) {
    e.preventDefault();
    this.onPeer_Review();
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
            <a className="navbar-brand">
              <img alt="Liberty Mutual Dashboard" src="img/liberty-mutual-logo-no-bg.png"  />
            </a>
          </div>
          <div className="collapse navbar-collapse pull-right" >
            <ul className="nav navbar-nav">
              <button type="button" className="btn btn-default buttons" onClick={(e) => this.gotomain(e)}>Main</button>
              <button type="button" className="btn btn-default buttons" onClick={(e) => this.gotoViewlog(e)}>View Log</button>
              <button type="button" className="btn btn-default buttons" onClick={(e) => this.gotoPeer_Review(e)}>Peer Review</button>
              <button type="button" className="btn btn-default buttons" onClick={(e) => this.gotoSign(e)}>Sign Out</button>
            </ul>
          </div>
        </div>
      </nav>

    );
  }
}


Navbar.contextTypes = {
  router: React.PropTypes.object.isRequired
};
