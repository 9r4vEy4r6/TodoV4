import React, { useState } from 'react';

const AddForm = (props) => {

    const [input, setInput] = useState("");
    
    const handleInput = (e) =>{
        //console.log(e);
        setInput(e.target.value);
    }

    const handleClick = (e) =>{
        props.addFunc(input);
        setInput("");
    }

    return (
        <div>
            <input value={input} onChange={handleInput}/>
            <button onClick={handleClick}>➕ Add task</button>
        </div>
    )
}

export default AddForm;