import React, { useState, useEffect } from "react";
import Column from "./Column.jsx";

export default function app(props) {
  const [reRender, setReRender] = useState(false)
  const [listOfCards, setListofCards] = useState([
    {
      name: "Winnie",
      cards: ["card1", "card2"]
    },
    {
      name: "Bob",
      cards: ["card3", "card4"]
    },
    {
      name: "Thomas",
      cards: ["card5", "card6"]
    },
    {
      name: "George",
      cards: ["card7", "card8"]
    }
  ]);


  const addToCard= (index)=>{  
  
    return ()=>{
      let newCard = window.prompt()
      listOfCards[index].cards.push(newCard)
      setReRender(!reRender)
    }

  }

  const moveCardLeft = (colIndex, cardIndex)=>{

      
      let moveCard =  listOfCards[colIndex].cards.splice(cardIndex,1)
      listOfCards[colIndex-1].cards.push(moveCard)
      setReRender(!reRender)
    
  }

  const moveCardRight= (colIndex, cardIndex)=>{

      let moveCard =  listOfCards[colIndex].cards.splice(cardIndex,1)
      listOfCards[colIndex+1].cards.push(moveCard)
      setReRender(!reRender)
    

  }

  return (
    <div className="grid-container">
      {listOfCards.map((list, index) => {
        if(index===0){
          return <Column key={index} name={list.name} column={index} cards={list.cards} addCard={addToCard(index)} 
          moveCardRight={moveCardRight}
         />;
        }

        if (index===listOfCards.length-1){
          return <Column className="Column" key={index} name={list.name} column={index} cards={list.cards} addCard={addToCard(index)}
          moveCardLeft={moveCardLeft}/>;
        }
      
          return <Column className="Column" key={index} name={list.name} column={index} cards={list.cards} addCard={addToCard(index)}
           moveCardLeft={moveCardLeft}
           moveCardRight={moveCardRight}/>;
        
        
      })}
    </div>
  );
}
