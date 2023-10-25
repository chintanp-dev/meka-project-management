import { React } from "react";
import Card from "./Card";
import { Droppable } from "react-beautiful-dnd";

function CardHolder({ cardHolderData, cardData }) {
  console.log(cardHolderData.id);
  return (
    <div className="main">
      <div className="flexboxes">
        <header className="header3">
          <div>{cardHolderData.title}</div>
          <div className="align_center">
            <img src={cardHolderData.plus}></img>
            <img src={cardHolderData.dot}></img>
          </div>
        </header>
        <Droppable droppableId={cardHolderData.id}>
          {(provided) => (
            <div innerRef={provided.innerRef} {...provided.droppableProps}>
            
              {cardData.map((cardData, index) => {
                return <Card key={cardData.id} cardData={cardData} index={index} />;
              })}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
}

export default CardHolder;
