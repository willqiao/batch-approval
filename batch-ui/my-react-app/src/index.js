import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Cell from "./Cell";
import TaskForm from "./TaskForm";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserDetailPage from "./pages/UserDetailPage";
import { connect, Provider } from 'react-redux';
import { Reducer, createStore } from 'redux';
import taskReducer from './reducer/reducer';
import UsersPage from "./pages/UsersPage";


const TaskPage = (props) => {
    return <App id="test1" title="just a test" />
}

const UserPage = (props) => {
    return    <TaskForm />
}

const SettingPage = (props) => {
    return <div>
    <div>
      <Cell /><Cell /><Cell />
    </div>
    <div>
      <Cell /><Cell /><Cell />
    </div>
    <div>
      <Cell /><Cell /><Cell />
    </div>
  </div>
}


const MenuLink = ({ label, to, iconname, badge}) => (
    <Route
      path={to}
      children={({ match }) => (
        <li className={match ? "active" : ""}><Link to={to}><i className="material-icons left">{iconname}</i> {label}
        {badge ? <span className="new badge red">{badge}</span> : ""}</Link></li>
      )}
    />
  );

const store = createStore(taskReducer);

ReactDOM.render(
    <Provider store={store}> 
  <Router basename='/batch-approval'>
    
      <div>
        <nav> 
            <div className="nav-wrapper teal lighten-2">
              <a href="#" className="brand-logo" style={{paddingLeft:'20px'}}><i className="material-icons">cloud</i>Batch Approval</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <MenuLink label='Tasks' to="/tasks" iconname='collections' badge='5'/>
                <MenuLink label='Users' to="/users" iconname='people'/>
                <MenuLink label='My Acct' to="/settings" iconname='settings'/>
              </ul>
            </div>
          </nav>

        <Route path="/tasks"  component={TaskPage} />
        <Route path="/users" exact={true}  component={UsersPage} />
        <Route path="/users/:id" component={UserDetailPage} />
        <Route path="/settings" component={SettingPage} />
      </div>
  </Router>
  </Provider>
  ,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
