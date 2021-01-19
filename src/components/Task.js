import React,{useState} from 'react';
import {ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Button, Modal, FormControl , InputLabel, Input} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import db from '../firebase';

const useStyles = makeStyles((theme) => ({
    edit_button: {
        color: '#fff',
        backgroundColor: blue[500],
    },
    modal: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: "3em 4em",
        // width : "20em",
        // height : "8em", 
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    })
);

const Task = (props) => {

    const classes = useStyles();
    
    const [open, setOpen] = useState(false);
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    
    const handleInput1 = (e) =>{
        setInput1(e.target.value);
    }

    const handleInput2 = (e) =>{
        setInput2(e.target.value);
    }

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

            <Modal open={open} onClose={handleClose}>
                <div className={classes.modal}>
                    <form>
                        <FormControl>
                            <InputLabel htmlFor="my-input1"> 📓 Task</InputLabel>
                            <Input id="my-input1" value={input1} onChange={handleInput1} /> 
                        </FormControl><br /><br />
                        <FormControl>
                            <InputLabel htmlFor="my-input2"> 📓 Description</InputLabel>
                            <Input id="my-input2" value={input2} onChange={handleInput2} /> 
                        </FormControl><br /><br />
                        <FormControl>
                            <Button disabled={!input1} variant="contained" color="primary" type="submit" onClick={handleClose}>
                                ✔️ Update
                            </Button>
                        </FormControl>
                    </form>
                </div>
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