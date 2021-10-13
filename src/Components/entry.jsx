import React, {useState} from 'react'
import Styled from 'styled-components';
import Button from 'Components/button';
// import AddIcon from '@mui/icons-material/Add';
// import TextField from "@mui/material/TextField"

import TextField from '@mui/material/TextField';

const Contain = Styled.div`
    text-align: center;``
    margin-bottom: 1.5rem;
`

const TodoEntry = Styled.input`
    background: #ffffff;
    height:3rem;
    width: 25rem;
    border: 2px solid #c7c7c7;
    border-radius:9px;
`

function Entry() {
    const [entry, SetEntry] = useState("");
    return (
        <Contain>
            <TodoEntry type="text" value={entry} placeholder="enter your Todo here..." />
            <Button>
                Save
            </Button>
           <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Contain>

        )
}

export default Entry
