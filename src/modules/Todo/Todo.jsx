import React from 'react';
import FormInput from './components/FormInput/FormInput.jsx';
import Task from './components/Tasks/Task.jsx';
import './Todo.scss';

const Todo = props => {
    const { allTasks } = props;

    return (
        <div className='root__main-container'>
            <div className='main-container__todo-container'>
                <FormInput/>
                <ul className='todo-container__tasks-container'>
                    {allTasks.length ?
                        allTasks.map(element => 
                            element.isOpen ? 
                                <Task 
                                    id={element.id}
                                    key={element.id}
                                    text={element.text}
                                    isCompleted={element.isCompleted}
                                />
                                : null
                        ) : null
                    }
                </ul>
            </div>
        </div>
    )
}

export default React.memo(Todo);