import React,{useState} from 'react';
import {ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Button, Modal} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import db from '../firebase';

const useStyles = makeStyles((theme) => ({
    edit_button: {
        color: '#fff',
        backgroundColor: blue[500],
      },
    })
);

const Task = (props) => {

    const classes = useStyles();
    //console.log(props);
    const [open, setOpen] = useState(false);

    const handleClose = (e) => {
        setOpen(false);
    }

    const modalOpen = (e) => {
        setOpen(true);
    }

    const deleteFunc = (event)=>{
        db
            .collection('todos')
            .doc(props.taskData.id)
            .delete();
    }

    return (
        <React.Fragment>
            <Modal
                open = {open}
                onClose = {handleClose}
            >
            </Modal>
            <ListItem>
                <ListItemAvatar>
                <Avatar variant="circular" onClick={modalOpen} className={classes.edit_button} >
                    🖋️ 
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.taskData.data.name} secondary={props.taskData.data.description} />
                <ListItemSecondaryAction>
                    <Button onClick={deleteFunc} variant="text" color="secondary">
                        🎯
                    </Button> 
                </ListItemSecondaryAction>
            </ListItem>
        </React.Fragment>
    )
}

export default Task;