import React ,{useContext} from 'react'

import {TaskListContext} from '../context/TaskListContext'


const Task = ({tasks}) => {
    const {removeTask , findItem} = useContext (TaskListContext)
    return (
        <li className="list-item">
            <span>{tasks.title}</span>
            <div>
                <button 
                className="btn-delete task-btn"
                onClick={()=> removeTask(tasks.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>{" "}
                <button
                className="btn-edit task-btn" onClick={()=> findItem(tasks.id)}>
                    <i className="fas fa-pen"></i>
                </button>
            </div>
            
        </li>
    )
}



export default Task
