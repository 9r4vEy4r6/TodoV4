import React from 'react';
import {ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Button} from '@material-ui/core';

const Task = (props) => {
    return (
        <ListItem>
            <ListItemAvatar>
            <Avatar>
                ⚒ 
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary={props.taskData.name} secondary={props.taskData.description} />
            <ListItemSecondaryAction>
                <Button variant="text" color="secondary">
                    🎯
                </Button> 
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Task;