import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ClockApp from "./ClockApp";
import Cell from "./Cell";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserDetailPage from "./pages/UserDetailPage";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import taskReducer from './reducer/reducer';
import UserListPage from "./pages/UserListPage";
import SudokuPage from "./pages/SudokuPage";




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
              <div className="brand-logo left" style={{paddingLeft:'20px'}}><i className="material-icons">cloud</i>Demo Site</div>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
            <Route
                path="/" exact={true}
                children={({ match }) => (
                    <li className={match ? "active" : ""}><Link to='/'><i className="small material-icons left">home</i>Home</Link></li>
                )} />

            <Route
                path="/games"
                children={({ match }) => (
                    <li className={match ? "active" : ""}><Link to='/games'><i className="small material-icons left">games</i>
                    Game<span className="new badge red"></span></Link></li>
                )} />

            <Route
                path="/tasks"
                children={({ match }) => (
                    <li className={match ? "active" : ""}><Link to="/tasks"><i className="small material-icons left">people</i>Tasks</Link></li>
                )} />

            <Route
                path="/settings"
                children={({ match }) => (
                    <li className={match ? "active" : ""}><Link to='/settings'><i className="small material-icons left">settings</i>Flip</Link></li>
                )} />

              </ul>
            </div>
          </nav>
        
        
        <div className="row" style={{padding:'15px'}}>
        <div className="col l12 ">

            <Route path="/" exact={true} component={()=> (
                <div>
            <div className="row">
                <div className="col s12 m5">
                    <div className="card-panel teal">
                    <span className="white-text">Click each block to flip the numbers, and click Solve button to find a solution. Enjoy.</span>
                    </div>
                </div>
            </div>

            <SudokuPage />
            
            </div>

            )}  />
            <Route path="/games"  component={()=> <ClockApp id="test1" title=" Addtional Title. " /> }  />
            <Route path="/tasks" exact={true}  component={UserListPage} />
            <Route path="/tasks/:id" component={UserDetailPage} />
            <Route path="/settings" component={SettingPage} />

        </div>
        </div>
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
