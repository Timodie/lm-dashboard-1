import React from 'react';
import {Link} from 'react-router';

export default class NavbarDev extends React.Component {

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
           <li><Link to="Main">Main</Link></li>
           <li><Link to ="View_log">View Log</Link></li>
           <li><Link to="Macro_Status">Macro Status</Link></li>
           <li><Link to="Sign-In">Sign Out</Link></li>
         </ul>
       </div>
     </div>
     </nav>

     );
     }
     }
