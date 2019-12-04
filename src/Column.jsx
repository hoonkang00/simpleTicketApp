import React from 'react'
import Card from './Card.jsx'

export default function Column(props) {
    let abc = props.name+ ' Column'
    return (
        <div className='real-column'>
            <div  className={abc}>{props.name}</div>
            {
                props.cards.map((content, index)=>{
                    return(
                    <Card  key={index} card={index} content={content} column={props.column} moveCardLeft={props.moveCardLeft?props.moveCardLeft:null}
                    moveCardRight={props.moveCardRight?props.moveCardRight:null}/>)
                })
            }
            <div className='add-button' onClick={props.addCard}>
                + Add Card +
            </div>
        </div>
    )
}
