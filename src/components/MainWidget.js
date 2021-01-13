import React,{ useState } from 'react';
import AddForm from './AddForm';
import Tasklist from './Tasklist';

import '../css/MainWidget.css';

const MainWidget = (props) => {
    const [todos, setTodos] = useState([{name : "Task1", description:"Description 1"}, {name : "Task2", description:"Description 2"}, {name : "Task3", description:"Description 3"}]);

    const addTodo = (data) => {
        setTodos([...todos, data]);
    }

    return (
        <div className="main-widget">
            <AddForm addFunc={addTodo} /><br/>
            <Tasklist tasks={todos} />
        </div>
    )
}

export default MainWidget;