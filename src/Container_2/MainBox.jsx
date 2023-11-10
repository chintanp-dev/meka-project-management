import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import initialData from "./InitialData";
import CardHolder from "./FlexBoxes/CardHolder";

function MainBox() {
  const [state, setState] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    const startingIndex = source.index;
    const endingIndex = destination.index;
    const draggedColumn = draggableId;

    if (type === "column") {
      setState((state) => {
        // objective - cardholderDataOrder change onDragdEnd.
        // 1 to change we have to select.
        // 2 perform change.
        // 3 save / return

        state.cardHolderDataOrder.splice(startingIndex, 1);
        state.cardHolderDataOrder.splice(endingIndex, 0, draggedColumn);

        return structuredClone(state);
      });
    }

    if (type === "cardData") {
      setState((state) => {
        // objective - move cards
        // select card
        // perf. operation
        // save
        console.log(state.cardHolderData);
        // state.cardHolderData.cardId.splice(startingIndex, 1);
        // state.cardHolderData.cardId.splice(endingIndex, 0, draggedColumn);
        // return structuredClone(state);
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <div
            className="main"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {state.cardHolderDataOrder.map((cardHolderId, index) => {
              const cardHolderData = state.cardHolderData[cardHolderId];
              const cardData = cardHolderData.cardId.map((cardId) => {
                return state.cardData[cardId];
              });

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

// if (
//   destination.droppableId === source.droppableId &&
//   destination.index === source.index
// ) {
//   return;
// }

// if (type === "cardHolderData") {
//   const newCardHolderDataOrder = state.cardHolderDataOrder;
//   newCardHolderDataOrder.splice(source.index, 1);
//   newCardHolderDataOrder.splice(destination.index, 0, draggableId);

//   const newState = {
//     ...state,
//     cardHolderDataOrder: newCardHolderDataOrder,
//   };
//   setState(newState);
//   return;
// }

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
