import React,{ useState } from 'react';
import AddForm from './AddForm';
import Tasklist from './Tasklist';

const MainWidget = (props) => {
    const [todos, setTodos] = useState(["Task 1","Task 2","Task 3","Task 4"]);

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