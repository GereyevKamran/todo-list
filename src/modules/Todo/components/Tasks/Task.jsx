import React from 'react';
import './task.scss';

const Task = props => {
    const { 
        deleteTask,
        completeTask
    } = props;

    const onDeleteTask = event => {
        deleteTask(event.target.id);
    }

    const onCompleteTask = event => {
        completeTask(event.target.id);
    }
    
    return(
        <li className={'tasks-container__task'}>
            <span
                id={props.id}
                onClick={onCompleteTask}
                children={props.text}
                className={`task__text ${props.isCompleted ? 'completed' : null}`}
            />
            <button 
                id={props.id}
                onClick={onDeleteTask}
                children='x'
                className='task__delete-btn'
            />
        </li>
    )
}

export default React.memo(Task);