import React from 'react';
import {CardItem} from './../cardItem/CardItem'
import './CardList.styles.css';

export const CardList = (props)=>{
    return (
        <div className="card-list">
            {props.monsters.map(monster => ( 
               <CardItem key={monster.id} item={monster}/>
            ))}
        </div>
       
    );
}