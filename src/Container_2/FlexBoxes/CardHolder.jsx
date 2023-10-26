import { React } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Card from "./Card";

function CardHolder(props) {
  return (
    <Draggable draggableId={props.cardHolderData.id} index={props.index}>
      {(provided) => (
        <div
          className="flexboxes"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <header className="header3">
            <div>{props.cardHolderData.title}</div>
            <div className="align_center">
              <img src={props.cardHolderData.plus}></img>
              <img src={props.cardHolderData.dot}></img>
            </div>
          </header>
          <Droppable droppableId={props.cardHolderData.id} type="cardData">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {props.cardData.map((cardData, index) => {
                  return (
                    <Card key={cardData.id} cardData={cardData} index={index} />
                  );
                })}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

export default CardHolder;
