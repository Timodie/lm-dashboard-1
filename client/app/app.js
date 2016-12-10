import React from 'react';
import ReactDOM from 'react-dom';
import Macro_Status_Page from './Components/Macro_Status_Dev_page.js';
import Peer_Review_Page from './Components/Peer_Review_Adm_page.js';
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

class peer_review_page extends React.Component {
  render() {
    return (
      <div>
        <Peer_Review_Page />
      </div>
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
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/* Show the Feed at / */}
      <IndexRoute component={main_page} />
      <Route path="Main" component={main_page} />
      <Route path="Macro_Status" component={macro_status_page} />
      <Route path="Peer_Review" component={peer_review_page} />
    </Route>
  </Router>
),document.getElementById('lm_dashboard'));
