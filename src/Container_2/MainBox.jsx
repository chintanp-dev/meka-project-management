import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./InitialData";
import CardHolder from "./FlexBoxes/CardHolder";

function MainBox() {

    const onDragEnd = result => {
        console.log( result);
    }

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
