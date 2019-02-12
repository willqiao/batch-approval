import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import actionTypes from '../constant/actionTypes';

class UserListPage extends Component {
    componentDidMount() {
        fetch('https://localhost:8443/batch-approval/tasks').then((res)=>res.json()).then(
            (tasks)=>  {
                this.props.loadTasks(tasks);
            }).catch((e)=>{
                this.props.loadTasks([{"taskId":1,"taskName":"Mock Data1","createdBy":"aaaaaa","taskOwner":"will","createdTime":1548932096.000000000,"formattedCreatedTime":"2019-01-31T04:54:56-06:00[America/Chicago]"},{"taskId":2,"taskName":"ffffff","createdBy":"aaaaaa","taskOwner":"will","createdTime":1548943928.000000000,"formattedCreatedTime":"2019-01-31T08:12:08-06:00[America/Chicago]"},{"taskId":3,"taskName":"ffffff","createdBy":"aaaaaa","taskOwner":"will","createdTime":1548944501.000000000,"formattedCreatedTime":"2019-01-31T08:21:41-06:00[America/Chicago]"},{"taskId":4,"taskName":"Mock Data 4","createdBy":"aaaaaa","taskOwner":"will","createdTime":1548947523.000000000,"formattedCreatedTime":"2019-01-31T09:12:03-06:00[America/Chicago]"}]);
            });

    }

    render() { 
        console.log('userspage', this.props);
        return ( <div>
            <ul className='collection'>
                {this.props.alltasks.map((t)=>{
                    return <li className='collection-item' key={'userlist'+t.taskId}> <Link to={'/tasks/'+ t.taskId}>{t.taskName+'-' + t.formattedCreatedTime} </Link></li>
                })}
                
            </ul>
        </div> );
    }
}

const mapDispatchToProps = (dispatch) =>  {
    return {
        loadTasks : (tasks) => dispatch({type:actionTypes.LOAD_TASKS, alltasks:tasks})
    }
}

const mapStateToProps = (state) => {
    
    return {alltasks:state.alltasks};
}
 
export default connect(mapStateToProps, mapDispatchToProps) (UserListPage);