import React from 'react';
import ReactDOM from 'react-dom';
import Macro_Status_Page from './Components/Macro_Status_Dev_page.js';
import Peer_Review_Page from './Components/Peer_Review_Adm_page.js';
import ViewLog from './Components/ViewLog.js';
import Navbar from './Components/navbar.js';
import NavbarDev from './Components/navbar_Dev.js';
import SignIn from './Components/signin.js';
import ErrorBanner from './Components/errorbanner.js';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

import MainPanel from './Components/main.js';


class macro_status_page extends React.Component {
  render() {
    return (
      <div>
        <Macro_Status_Page />
      </div>
    );
  }
}

class view_log_page extends React.Component {
  render() {
    return (
      <div>
        <link href ="css/ViewLog.css" rel ="stylesheet" />
        <ViewLog />

      </div>
    );
  }
}

class peer_review_page extends React.Component {
  render() {
    return (
      <div>
        <Peer_Review_Page />
      </div>
    );
  }
}

class sign_in_page extends React.Component{
render(){
  return(
      <div>  <link href ="css/sign-in-style.css" rel ="stylesheet" />
        <SignIn /> </div>
  );
}
}
class main_page extends React.Component {
  render() {
    return (
      <div>
        <MainPanel />
      </div>
    );
  }
}


class App extends React.Component {

  render() {
    var id = this.props.location.state;
    if (id == null) {
      return (
        <div>
          <Navbar />
          <ErrorBanner />
          {this.props.children}
        </div>
      )
    }

    else if (id.rolecheck == 'developer') {
      return (
        <div>
          <NavbarDev />
          <ErrorBanner />
          {this.props.children}
        </div>
      )
    }

    else if (id.rolecheck == 'admin') {
      return (
        <div>
          <Navbar />
          <ErrorBanner />
          {this.props.children}
        </div>
      )
    }
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={sign_in_page} />
      <Route path="Main" component={main_page} />
      <Route path="Macro_Status" component={macro_status_page} />
      <Route path="Peer_Review" component={peer_review_page} />
      <Route path ="View_log" component= {view_log_page} />
      <Route path ="Sign-In" component ={sign_in_page} />
    </Route>
  </Router>
),document.getElementById('lm_dashboard'));
