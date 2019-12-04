import React from 'react'



export default function Card(props) {
    return (
        <div className='Card'>
            {
                props.moveCardLeft?(
                
                <div className="arrow-button left-arrow" onClick={()=>{
                    console.log(props)
                    props.moveCardLeft(props.column, props.card)}}>{'<'}</div>):<div></div>
            }
            <div className='content'>{props.content}</div>
            {
                props.moveCardRight?(<div className="arrow-button right-arrow"  onClick={()=>{props.moveCardRight(props.column, props.card)}}>{'>'}</div>):<div></div>
            }
        </div>
    )
}
