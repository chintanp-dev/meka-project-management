import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./InitialData";
import CardHolder from "./FlexBoxes/CardHolder";

function MainBox() {

    onDragEnd = result => {
        const { destination, source, draggableId} = result;
     
        if (!destination) {
        return;
        }
     
        if (
        destination.droppableId === source.droppableId &&
        destination. index === source.index
        ) {
        return;
        }

        const  cardHolderData = initialData.cardHolderData [source.droppableId];
        const newCardId = Array.from( cardHolderData. cardId);
        newCardId.splice (source. index, 1);
        newCardId.splice (destination. index, 0, draggableId);

        const newCardHolderData = {
        ... cardHolderData,
        cardId: newCardId,
        };

        const newInitialData = {
            ...initialData,
            cardHolderData: {
                ...initialData.cardHolderData,
                [newCardHolderData.id] : newCardHolderData
            }
        }
            setInitialData(newInitialData)
    };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {initialData.cardHolderDataOrder.map((cardHolderId) => {
        const cardHolderData = initialData.cardHolderData[cardHolderId];

        const cardData = cardHolderData.cardId.map(
          (cardData, index) =>
            initialData.cardHolderData[cardHolderId].cardId[index]
        );

        return (
          <CardHolder
            key={cardHolderData.id}
            cardHolderData={cardHolderData}
            cardData={cardData}
          />
        );
      })}
    </DragDropContext>
  );
}

export default MainBox;

// cardId === cardHolderData.cardId

// [1, 2, 3].map(el => el)
// returning same array
