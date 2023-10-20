import { React } from "react";
import Card from "./Card";

function CardHolder({ cardHolderData }) {
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

        {cardHolderData.cardId.map((cardData) => {
          console.log("f",cardData);
          return (
          <div>
          <Card key={cardData.id} cardData={cardData} />
          </div>
        )})}
      </div>
    </div>
  );
}


export default CardHolder;
