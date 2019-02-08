import React, { Component } from 'react';
class MyNav extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
          <nav> 
            <div className="nav-wrapper">
            {/* <i className="material-icons">collections</i> */}
              <a href="#" className="brand-logo" style={{paddingLeft:'20px'}}><i className="material-icons">cloud</i>Batch Approval</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#"><i className="material-icons left">collections</i> Tasks</a> </li>
                <li><a href="#"><i className="material-icons left">people</i> Users</a></li>
                <li><a href="#"><i className="material-icons left">settings</i> My Account</a></li>
              </ul>
            </div>
          </nav>
         );
    }
}
 
export default MyNav;