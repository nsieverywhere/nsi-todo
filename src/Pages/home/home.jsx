import React from 'react';
import Entry from 'Components/entry';
import Home from './home.module.css';
import Cards from 'Components/card'

const CardItem = [];

function home() {

    const onAdd = (entry) =>{
        CardItem.push(entry);
    }


    return (
        <div>
            <Entry onAdd={onAdd} />
            <div className={Home.cardcontainer}>
               {console.log(CardItem)}
                {/* {CardItem.map((carditem)=>{
                    console.log(carditem.entry);
                })} */}
            
            </div>
        </div>
    )
}

export default home
