import React from 'react';
import {ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Button} from '@material-ui/core';
import db from '../firebase';

const Task = (props) => {

    const deleteFunc = (event)=>{
        db
            .collection('todos')
            .doc(props.taskData.id)
            .delete();
    }

    return (
        <ListItem>
            <ListItemAvatar>
            <Avatar>
                ⚒ 
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary={props.taskData.data.name} secondary={props.taskData.data.description} />
            <ListItemSecondaryAction>
                <Button onClick={deleteFunc} variant="text" color="secondary">
                    🎯
                </Button> 
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Task;