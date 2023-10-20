import { React } from "react";
import Card from "./Card";

function CardHolder() {
  return (
    <div className="main">
      {/* <div className="flexboxes">
        <header className="header3">
          <div>{cardHolderData.title}</div>
          <div className="align_center">
            <img src={cardHolderData.plus}></img>
            <img src={cardHolderData.dot}></img>
          </div>
        </header>

        <Card>
          {props.cards.map((Card) => (
            <Card key={cardData.id} cardData={cardData} />
          ))}
        </Card>
      </div> */}
    </div>
  );
}

export default CardHolder;
