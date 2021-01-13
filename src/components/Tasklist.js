import React from 'react';
import Task from './Task';

const Tasklist = (props) => {

    const tasks  = ["Task 1","Task 2","Task 3","Task 4"]
    const list = tasks.map((task,i) => <Task key={i} taskData={task} />);
    return (
        <ul>
            {[list]}
        </ul>
    )
}

export default Tasklist;