import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import initialData from "./InitialData";
import CardHolder from "./FlexBoxes/CardHolder";

function MainBox() {
    
  const [state, setState] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "cardHolderData") {
      const newCardHolderDataOrder = state.cardHolderDataOrder;
      newCardHolderDataOrder.splice(source.index, 1);
      newCardHolderDataOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...state,
        cardHolderDataOrder: newCardHolderDataOrder,
      };
      setState(newState);
      return;
    }

    // const start = state.cardHolderData[source.droppableId];
    // const finish = state.cardHolderData[destination.droppableId];

    // if (start === finish) {
    //   const newCardId = Array.from(draggableId);
    //   newCardId.splice(source.index, 1);
    //   newCardId.splice(destination.index, 0, draggableId);
    //   const newCardHolderData = {
    //     ...start,
    //     cardId: newCardId,
    //   };
    //   const newState = {
    //     ...state,
    //     cardHolderData: {
    //       ...state.cardHolderData,
    //       [newCardHolderData.id]: newCardHolderData,
    //     },
    //   };
    //   setState(newState);
    //   return;
    // }



    // Moving from one cardHolder to another

    // const startCardId = start.cardId;
    // startCardId.splice(source.index, 1);

    // const newStart = {
    //   ...start,
    //   cardId: startCardId,
    // };

    // const finishCardId = finish.cardId;
    // finishCardId.splice(destination.index, 0, draggableId);

    // const newFinish = {
    //   ...finish,
    //   cardId: finishCardId,
    // };

    // const newState = {
    //   ...state,
    //   cardHolderData: {
    //     ...state.cardHolderData,
    //     [newStart.id]: newStart,
    //     [newFinish.id]: newFinish,
    //   },
    // };
    // newState;


    setState((state) => {
    const [reorderedItem] = state.splice(result.source.index, 1);
    state.splice(result.destination.index, 0, reorderedItem);
    state = structuredClone(state);
    return state;
  });

  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="all-columns"
        direction="horizontal"
        type="column"
      >
        {(provided) => (
          <div
            className="main"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {state.cardHolderDataOrder.map((cardHolderId, index) => {
              const cardHolderData = state.cardHolderData[cardHolderId];

              const cardData = cardHolderData.cardId.map(
                (cardId) => state.cardData[cardId]
              );

              return (
                <CardHolder
                  key={cardHolderData.id}
                  cardHolderData={cardHolderData}
                  cardData={cardData}
                  index={index}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default MainBox;

// cardId === cardHolderData.cardId

// [1, 2, 3].map(el => el)
// returning same array
