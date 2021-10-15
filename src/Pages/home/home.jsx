import React, {useState}  from 'react';
import Entry from 'Components/entry';
import Homecss from './home.module.css';
import Cards from 'Components/card'


function Home() {
    const [cardItems, SetCardItems] = useState([])
     
    const onAdd = (entry) =>{
        SetCardItems([...cardItems, entry]);
    }

    const onDelete = (n) => {
      
          SetCardItems(
            cardItems.filter((card)=>card.n !== n)
          );

    }
            
        
    // cardItems.filter((card)=>{cardItems.n !== n}


    return (
        <div>
            <Entry onAdd={onAdd} />
            <div className={Homecss.cardcontainer}>
                {cardItems.map((i)=>{
                    return <Cards key={i.n} title={i.title} cardcontent={i.entry} onDelete={onDelete} id={i.n}/>
                })}
            </div>
        </div>
    )
    
}

export default Home
