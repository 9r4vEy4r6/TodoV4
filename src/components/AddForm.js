import React, { useState } from 'react';
import { FormControl , InputLabel, Button, Input } from '@material-ui/core';

const AddForm = (props) => {

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    
    const handleInput1 = (e) =>{
        setInput1(e.target.value);
    }

    const handleInput2 = (e) =>{
        setInput2(e.target.value);
    }

    const handleClick = (e) =>{
        e.preventDefault();
        if(input1!=="")
        {
            props.addFunc({
                name : input1,
                description : input2
            });
            setInput1("");
            setInput2("");
        }
    }

    return (
        <div>
            <form>
                <FormControl>
                    <InputLabel htmlFor="my-input1"> 📓 Task name</InputLabel>
                    <Input id="my-input1" value={input1} onChange={handleInput1} /> 
                </FormControl><br /><br />
                <FormControl>
                    <InputLabel htmlFor="my-input2"> 📓 Task description</InputLabel>
                    <Input id="my-input2" value={input2} onChange={handleInput2} /> 
                </FormControl><br /><br />
                <FormControl>
                    <Button disabled={!input1} variant="contained" color="primary" type="submit" onClick={handleClick}>
                        ➕ Add task
                    </Button>
                </FormControl>
            </form>
        </div>
    )
}

export default AddForm;