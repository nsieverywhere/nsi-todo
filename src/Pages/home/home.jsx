import React, {useState}  from 'react';
import Entry from 'Components/entry';
import Homecss from './home.module.css';
import Cards from 'Components/card'


function Home() {
    const [cardItems, SetCardItems] = useState([])
     
    const onAdd = (entry) =>{
        SetCardItems([...cardItems, entry]);
    }
    console.log(cardItems);


    return (
        <div>
            <Entry onAdd={onAdd} />
            <div className={Homecss.cardcontainer}>
                {cardItems.map((i)=>{
                    return <Cards key={i.n} cardcontent={i.entry} />
                })}
            </div>
        </div>
    )
    
}

export default Home
