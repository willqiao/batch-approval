import React, { Component } from "react";

class TicCell extends Component {

  render() {
    if (this.props.value !==0 ) {//already moved
      return (
        <div className="cellStyle">
          <div className={this.props.value === 0 ? "squareStyle" : (this.props.value === 9 ? "circleStyle" : "squareStyleFill") } />
        </div>
      );
    } else {
      return (
        <div
          onClick={()=>{this.props.onclickevent(this.props.i, this.props.j)}}
          style={{cursor: 'pointer'}}
          className="cellStyle">
          <div className={this.props.value === 0 ? "squareStyle" : (this.props.value === 9 ? "circleStyle" : "squareStyleFill") } />
        </div>
      );
    }
    
  }
}



export default TicCell;
