import React, { Component } from 'react';
import { ProgressBar } from './Cell';

const ClockView = (props) => {
  let clockstyle = {
    position: 'relative',
    border: '1px solid',
    height: '400px',
    width: '400px',
    borderRadius: '50%'
  }

  let secondStyle = {
    position: 'relative',
    top: '200px',
    left: '200px',
    border: '1px solid',
    height: '1px',
    width: '45%',
    transform: 'rotate(' + props.seconds + ')',
    transformOrigin: '0 0'
  }

  return <div style={clockstyle} {...props}>
    <div style={secondStyle}></div>
  </div>
}

class App extends Component {

  state = {
    test: "good job",
    rotateSecond: '0deg',
    displayProgress: 'inactive',
    intervalHandle: null,
    
  };

  unmount = false;

  componentDidMount() {
    this.unmount = false;
    let handler = setInterval(() => {
      this.setState({ rotateSecond: (-90 + (new Date().getSeconds() * 6)) + 'deg' });
    }, 1000);

    this.setState({intervalHandle:handler});
    this.setState({displayProgress:'active'});
    fetch('https://localhost:8443/batch-approval/tasks').then((res)=>res.json()).then(
      (data)=>  {
        if (this.unmount === false) {
          this.setState({test:data[0].formattedCreatedTime})
          this.setState({displayProgress:'inactive'});
          console.log(this.state, 'test2');
        }
      }).catch((e)=>console.log(e));
    
  }

  componentWillUnmount() {
    this.unmount = true;
    window.clearInterval(this.state.intervalHandle);
  }

  render() {

    return <div {...this.props} className="App" >
      

      <ClockView seconds={this.state.rotateSecond} onClick={(event)=> {
        this.setState({displayProgress:'active'});
        fetch('https://localhost:8443/batch-approval/tasks').then((res)=>res.json()).then(
          (data)=>  {
            this.setState({test:data[0].formattedCreatedTime})
            this.setState({displayProgress:'inactive'});
            console.log(this.state, 'test2');
          }).catch((e)=>console.log(e));
        }} />

      <div>{this.state.rotateSecond} this s i"s my n'fame fff   : {new Date().toISOString()} {this.props.title}</div>
      <ProgressBar displayProgress={this.state.displayProgress}/>  
    </div>;
  }
}

export default App;
