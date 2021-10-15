import React, {useState} from 'react'
import Styled from 'styled-components';
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';


const Contain = Styled.div`
    text-align: center;
    margin-bottom: 1.5rem;
`
const TodoTitle = Styled.input`
    background: #ffffff;
    height:3rem;
    width: 10rem;
    border: 2px solid #c7c7c7;
    border-radius:9px;
    margin-right: 1rem;
    
`
const TodoEntry = Styled.input`
    background: #ffffff;
    height:3rem;
    width: 25rem;
    border: 2px solid #c7c7c7;
    border-radius:9px;
    margin-right: 1rem;
`

function Entry(props) {
    const [entry, SetEntry] = useState("");
    const [entryalert, setEntryalert] = useState(null);
    const [title, SetTitle] = useState("");

    function saveitem(e) {
        e.preventDefault();
        if(!entry || !title){
            setEntryalert("empty list")
            setTimeout(() => {
               setEntryalert("")
              
            }, 1000);
        }else{
            let d = new Date();
            let n = d.valueOf();
            props.onAdd({n, title, entry});
            SetEntry("");
            SetTitle("")
        }

        
    } 
    return (
        <Contain>
            <form onSubmit={saveitem}>
                <p>{entryalert}</p>
               
                <TodoTitle onChange={(e)=> {SetTitle(e.target.value)}} value={title} placeholder="Title" />
                <TodoEntry type="text" onChange={(e) => {SetEntry(e.target.value)}} value={entry} placeholder="enter your Todo here..." />
                <Button type="submit" variant="contained"  >
                    Save <Add />
                </Button>
                    
            </form>
        </Contain>

        )
}

export default Entry
