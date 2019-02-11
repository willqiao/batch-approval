import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class UsersPage extends Component {
    componentDidMount() {
        fetch('https://localhost:8443/batch-approval/tasks').then((res)=>res.json()).then(
            (tasks)=>  {
                this.props.loadTasks(tasks);
            }).catch((e)=>console.log(e));

    }

    render() { 
        console.log('userspage', this.props);
        return ( <div>
            <ul className='collection'>
                {this.props.alltasks.map((t)=>{
                    return <li className='collection-item' key={'userlist'+t.taskId}> <Link to={'/users/'+ t.taskId}>{t.taskName+'-' + t.formattedCreatedTime} </Link></li>
                })}
                
            </ul>
        </div> );
    }
}

const mapDispatchToProps = (dispatch) =>  {
    return {
        loadTasks : (tasks) => dispatch({type:'LOAD_TASKS', alltasks:tasks})
    }
}

const mapStateToProps = (state) => {
    
    return {alltasks:state.alltasks};
}
 
export default connect(mapStateToProps, mapDispatchToProps) (UsersPage);