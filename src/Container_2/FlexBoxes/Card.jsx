import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import BubbleImg from "./BubbleImg";

function Card({ props }) {
  const [card, updateCard] = useState(props.infoCard);

  function handleOnDragEnd(result) {
    const items = Array.from(card);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCard(items);
    console.log(result);
  }
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="card">
        
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} >
            {card.map((item, index) => {
              return (
                <div className="card" key={item.id}>
                  <Draggable draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
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
                        <div>
                          <br />

                          <BubbleImg item={item} />
                        </div>
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

export default Card;
