import React from 'react';
import {ListItem, ListItemAvatar, Avatar, ListItemText} from '@material-ui/core';

const Task = (props) => {
    //console.log(props);
    return (
        <ListItem>
            <ListItemAvatar>
            <Avatar>
                ⚒ 
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary={props.taskData.name} secondary={props.taskData.description} />
        </ListItem>
    )
}

export default Task;