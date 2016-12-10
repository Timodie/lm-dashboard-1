import React from 'react';
import {Link} from 'react-router';

export default class Navbar extends React.Component {

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
           <li className="active"><a href="#">Main</a></li>
           <li><Link to ="View_log">View Log</a></li>
           <li><a href="#">Peer Review</a></li>
           <li><a href="#">Sign Out</a></li>
         </ul>
         </div>
       </div>
     </nav>

     );
     }
     }
