import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const ClockView = (props) => {
  let clockstyle = {
    position: 'relative',
    border: '1px solid',
    height: '500px',
    width: '500px',
    borderRadius: '50%'
  }

  let secondStyle = {
    position: 'relative',
    top: '250px',
    left: '250px',
    border: '1px solid',
    height: '1px',
    width: '45%',
    transform: 'rotate(' + props.seconds + ')',
    transformOrigin: '0 0'
  }

  return <div style={clockstyle}>
    <div style={secondStyle}></div>
  </div>
}

class App extends Component {

  state = {
    test: "good job",
    rotateSecond: '0deg'
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState({ rotateSecond: (-90 + (new Date().getSeconds() * 6)) + 'deg' });
    }, 1000);

    fetch('https://localhost:8443/batch-approval/tasks').then(
      (res)=> {console.log(res)} )
      .then((res)=>console.log(res)).catch((e)=>console.log(e));

  }


  render() {
    let num = Number.MAX_SAFE_INTEGER;
    let t = new Date();
    let a = new Set();
    a.add("test");

    return <div {...this.props} className="App" >
      <ClockView seconds={this.state.rotateSecond} />

      <div>{this.state.rotateSecond} this s i"s my n'fame fff   : {new Date().toISOString()} {this.props.title}</div>
    </div>;
  }
}

export default App;
