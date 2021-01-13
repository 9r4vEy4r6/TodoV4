import React from 'react';
import Task from './Task';

const Tasklist = (props) => {

    const list = props.tasks.map((task,i) => {
        //console.log(i);
        //console.log(task);
        return <Task taskData={task} key={i} />
    });
    return (
        <ul>
            {[list]}
        </ul>
    )
}

export default Tasklist;