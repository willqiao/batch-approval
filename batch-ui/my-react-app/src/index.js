import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cell from './Cell';
import TaskForm from './TaskForm';
import * as serviceWorker from './serviceWorker';
import MyNav from './MyNav';

ReactDOM.render(
<div>
    <MyNav />

    <App id='test1' title='just a test'/>
    <div>
    <Cell/><Cell/><Cell/>
    </div>
    <div>
    <Cell/><Cell/><Cell/>
    </div>
    <div>
    <Cell/><Cell/><Cell/>
    </div>
    <TaskForm/>
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
