import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Card from "./Card";

function CardHolder({ parentInfoCard }) {
  const [cardHolder, updateCardHolder] = useState(parentInfoCard);

  function handleOnDragEnd(result) {
    const items = Array.from(cardHolder);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCardHolder(items);
    console.log(result);
  }
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="card">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {cardHolder.map((props, index) => {
              return (
                <div className="flexboxes" key={props.id}>
                  <Draggable draggableId={props.id} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <header className="header3">
                          <div>{props.title}</div>
                          <div className="align_center">
                            <img src={props.plus}></img>
                            <img src={props.dot}></img>
                          </div>
                        </header>

                        <Card props={props} />
                      </div>
                    )}
                  </Draggable>
                </div>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default CardHolder;
