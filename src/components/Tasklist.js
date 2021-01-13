import React from 'react';
import Task from './Task';
import {List, Grid} from '@material-ui/core';

const Tasklist = (props) => {

    const list1 = props.tasks.map((task,i) => {
        if(i%2===0)
        return <Task taskData={task} key={i} />
    });

    const list2 = props.tasks.map((task,i) => {
        if(i%2===1)
        return <Task taskData={task} key={i} />
    });

    return (
        <div className="list-div">
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <List>
                        {[list1]}
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <List>
                        {[list2]}
                    </List>
                </Grid>
            </Grid>
        </div>
    )
}

export default Tasklist;