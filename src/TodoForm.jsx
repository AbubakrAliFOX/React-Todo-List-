import { ListItem } from "@mui/material";
import {TextField} from "@mui/material";
import {InputAdornment} from "@mui/material"
import {IconButton} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { useState } from "react";


export default function TodoForm ({addTodo}) {
    const [text, setText] = useState("");
    const handleChange = (evt) => {
        setText(evt.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text) {
            addTodo(text);
            setText("");
        }
    }

    return (
        <ListItem> 
            <form onSubmit={handleSubmit}>
                <TextField 
                    onChange={handleChange} 
                    value={text} 
                    id="outlined-basic" 
                    label="New Todo" 
                    variant="outlined"
                    InputProps={{
                        endAdornment: (<InputAdornment position="end">
                        <IconButton
                        aria-label="Create Todo"
                        edge="end"
                        type="sumbit"
                        >
                            <AddCircleOutlineIcon />
                        </IconButton>
                    </InputAdornment>),
                    }}
                />
            </form>
        </ListItem>
    )
}