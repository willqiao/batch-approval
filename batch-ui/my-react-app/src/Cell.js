import React, { Component } from "react";
import { connect } from 'react-redux';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = { cellClass: "squareStyle" };
  }

  render() {
    console.log(this.props, "Cell");
    return (
      <div
        onClick={event => {
          this.state.cellClass === "squareStyle"
            ? this.setState({ cellClass: "circleStyle" })
            : this.state.cellClass === "circleStyle" ? this.setState({ cellClass: "squareStyleFill" }) : this.setState({ cellClass: "squareStyle" });
        }}
        className="cellStyle">
        <div className={this.state.cellClass} />
      </div>
    );
  }
}

export const ProgressBar = (props) => {
  return (
    <div stlye={{ 'position': "absolute", 'left': "50%", 'top': "35%"}}
      className={"preloader-wrapper big " + props.displayProgress }
      > 
      <div className="spinner-layer spinner-blue-only">
        <div className="circle-clipper left">
          <div className="circle" />
        </div>
        <div className="gap-patch">
          <div className="circle" />
        </div>
        <div className="circle-clipper right">
          <div className="circle" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (previousState) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return { 
          on_click: ()=> dispatch({type:'good', data:'mydata' })
        }
}

export default connect(mapStateToProps, mapDispatchToProps) (Cell);
