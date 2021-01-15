import React, { useState } from 'react';
import './forminput.scss';

const FormInput = props => {
    const [taskText, setTaskText] = useState('');
    const { 
        allTasks,
        saveTask
    } = props;

    const handleSubmit = event => {
        event.preventDefault();

        if (taskText){
            const task = {
                id: allTasks.length,
                text: taskText,
                isOpen: true,
                isCompleted: false,
            };
    
            saveTask(task);
            setTaskText('');
        }
    }

    const handleChange = event => {
        setTaskText(event.target.value);
    }
    
    return (
        <form className='todo-container__form-container'
              onSubmit={handleSubmit}>
            <input 
                value={taskText}
                onChange={handleChange}
                className='form-container__input'
                placeholder='write your task'/>
            <button className='form-container__add-task-btn'
                    children='Save'/>
        </form>
    )
}

export default React.memo(FormInput);