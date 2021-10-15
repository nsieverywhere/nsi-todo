import React from 'react';
import Entry from 'Components/entry';
import Home from './home.module.css';
import Cards from 'Components/card'

const CardItem = [];

function home() {

    const onAdd = (entry) =>{
        CardItem.push(entry);
        console.log(CardItem);
    }


    return (
        <div>
            <Entry onAdd={onAdd} />
            <div className={Home.cardcontainer}>
               <Cards title="my first todo" cardcontent="nsi is the best " />
                <Cards title="my first todo" cardcontent="nsi is the best" />                                                                                        
            </div>
        </div>
    )
}

export default home
