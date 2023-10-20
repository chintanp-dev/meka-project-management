import React from "react";
import initialData from "./InitialData";
import CardHolder from "./FlexBoxes/CardHolder";

function MainBox() {
  return initialData.cardHolderDataOrder.map((cardHolderId) => {
    const cardHolderData = initialData.cardHolderData[cardHolderId];

    const cardId = cardHolderData.cardId.map(
      (cardId, index) => initialData.cardHolderData[cardHolderId].cardId[index]
    );

    // cardId === cardHolderData.cardId

    // [1, 2, 3].map(el => el)
    // returning same array

    return (
      <CardHolder
        key={cardHolderData.id}
        cardHolderData={cardHolderData}
        cardId={cardId}
      />
    );
  });
}

export default MainBox;
