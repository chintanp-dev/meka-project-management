import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import BubbleImg from "./BubbleImg";

function Card({ props }) {
  const [card, updateCard] = useState(props.infoCard);

  function handleOnDragEndCard(result) {
    if (!result.destination) return;

    updateCard((prevState) => {
      const [reorderedItem] = prevState.splice(result.source.index, 1);
      prevState.splice(result.destination.index, 0, reorderedItem);
      prevState = structuredClone(prevState);
      return prevState;
    });
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEndCard}>
      <Droppable droppableId="card">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {card.map((item, index) => {
              return (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      className="card"
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <div className="header31">
                        <div className="gray">{item.category}</div>
                        <div className="align_center">
                          <img src={item.dot}></img>
                        </div>
                      </div>

                      <div>{item.title}</div>
                      <br />
                      <div className="smallfont">{item.description}</div>

                      <br />

                      <BubbleImg item={item} />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Card;
