import React from 'react';

const Task = (props) => {
    //console.log(props);
    return (
        <li>{props.taskData}</li>
    )
}

export default Task;