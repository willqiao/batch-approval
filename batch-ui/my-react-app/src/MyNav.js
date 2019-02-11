import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MyNav extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        console.log(this.context.router);
        return ( 
            
          <nav> 
            <div className="nav-wrapper teal lighten-2">
              <a href="#" className="brand-logo" style={{paddingLeft:'20px'}}><i className="material-icons">cloud</i>Batch Approval</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/tasks"><i className="material-icons left">collections</i> Tasks <span class="new badge red">4</span></a> </li>
                <li><a href="/users"><i className="material-icons left">people</i> Users</a></li>
                <li className="active"><Link to="/settings"><i className="material-icons left">settings</i> My Account</Link></li>
              </ul>
            </div>
          </nav>
         );
    }
}
 
export default MyNav;