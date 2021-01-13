import React,{ useState } from 'react';
import AddForm from './AddForm';
import Tasklist from './Tasklist';

const MainWidget = (props) => {
    const [todos, setTodos] = useState([{name : "Task1", description:"Description 1"}, {name : "Task2", description:"Description 2"}, {name : "Task3", description:"Description 3"}]);

    const addTodo = (data) => {
        // console.log( '👾', 'Parent method here' );
        setTodos([...todos, data]);
    }

    return (
        <div>
            <AddForm addFunc={addTodo} /><br/>
            <Tasklist tasks={todos} />
        </div>
    )
}

export default MainWidget;