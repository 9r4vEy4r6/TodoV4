import React, { useState } from 'react';
import { FormControl , InputLabel, Button, Input } from '@material-ui/core';

const AddForm = (props) => {

    const [input, setInput] = useState("");
    
    const handleInput = (e) =>{
        //console.log(e);
        setInput(e.target.value);
    }

    const handleClick = (e) =>{
        e.preventDefault();
        if(input!=="")
        {
            props.addFunc(input);
            setInput("");
        }
    }

    return (
        <div>
            <form>
                <FormControl>
                    <InputLabel htmlFor="my-input"> 📓 Task name</InputLabel>
                    <Input id="my-input" value={input} onChange={handleInput} /> 
                    <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={handleClick}>
                        ➕ Add task
                    </Button>
                </FormControl>
            </form>
        </div>
    )
}

export default AddForm;