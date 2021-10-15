import Card from '@mui/material/Card'
import Delete from "@mui/icons-material/Delete"
import Cardcss from './card.module.css'
import IconButton from "@mui/material/IconButton";

function start(){
    console.log("the begining");
}

function Cards(props) {
    return (
        <div>
            <Card variant="outlined" className={Cardcss.cards} >
                <h3>{props.title}</h3>
                <p>
                    {props.cardcontent}
                </p>
                <IconButton onClick={start} className={Cardcss.deletebtn}>
                    <Delete  />    
                </IconButton>
            </Card>
        </div>
    )
}

export default Cards
