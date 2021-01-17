import React,{ useEffect, useState } from 'react';
import AddForm from './AddForm';
import Tasklist from './Tasklist';
import db from '../firebase';

import '../css/MainWidget.css';

const MainWidget = (props) => {
    //const arr = [{name : "Task1", description:"Description 1"}, {name : "Task2", description:"Description 2"}, {name : "Task3", description:"Description 3"}]
    const [todos, setTodos] = useState([]);

    useEffect( ()=> {
        db
            .collection('todos')
            .onSnapshot(snapshot => {
                setTodos(snapshot.docs.map(doc => ({id : doc.id , data : doc.data()} )))
            });
    }, []);

    const addTodo = (data) => {
        db
            .collection('todos')
            .add(data);
    }

    return (
        <div className="main-widget">
            <AddForm addFunc={addTodo} /><br/>
            <Tasklist tasks={todos} />
        </div>
    )
}

export default MainWidget;