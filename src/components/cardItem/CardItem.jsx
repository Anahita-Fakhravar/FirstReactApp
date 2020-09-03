  
import React from 'react';
import './CardItem.styles.css';

export const CardItem = (props) => (
    <div className="card-container">
        <img className="card-image" alt="item" src={`https://robohash.org/${props.item.id}?set=set2&size=180x180`} />
        <h2>{props.item.name}</h2>
        <p>{props.item.email}</p>
    </div>
)