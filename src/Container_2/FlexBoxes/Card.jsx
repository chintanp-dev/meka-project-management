import { React } from "react";

import BubbleImg from "./BubbleImg";

function Card({cardData}) {
    console.log(cardData.category);
    console.log(cardData.id);
  return (
    <div className="card">
      <div className="header31">
        <div className="gray">{cardData.category}</div>
        <div className="align_center">
          <img src={cardData.dot}></img>
        </div>
      </div>

      <div>{cardData.title}</div>
      <br />
      <div className="smallfont">{cardData.description}</div>

      <br />

      {/* <BubbleImg item={item} /> */}
    </div>
  );
}

export default Card;
