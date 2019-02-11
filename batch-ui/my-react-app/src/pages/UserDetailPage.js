import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionTypes from '../constant/actionTypes';


class UserDetailPage extends Component {

    componentDidMount(){
        this.props.onGetTask(this.props.match.params.id);
    }

    render() { 
        console.log("hereagain", this.props);
        return ( <div><br/> {this.props.match.params.id} 
        <button className="waves-effect waves-light btn-small" onClick={()=>this.props.onGetTask(this.props.match.params.id)}>Get</button>
        <div>
            {this.props.currentTask.taskName} <br/>
            {this.props.currentTask.taskId} <br/>
            {this.props.currentTask.taskCreated} <br/>
        </div>
            </div> );
    }
}

const mapStateToProps = (state) => {
    const newstate = {...state};
    return newstate;
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetTask: (id)=> {
            fetch('https://localhost:8443/batch-approval/task/'+ id).then((res)=> res.json()).then(t=>{
                dispatch({type:actionTypes.GET_TASK, task:{taskName:t.taskName, taskId: t.taskId, taskCreated:t.formattedCreatedTime}});
            }).catch((e)=>console.log(e));
            
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps) (UserDetailPage);