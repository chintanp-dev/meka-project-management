import { React } from "react";
import BubbleImg from "./BubbleImg";

function Card() {
  return (
    <div className="card">
      <div className="header31">
        <div className="gray">{item.category}</div>
        <div className="align_center">
          <img src={item.dot}></img>
        </div>
      </div>

      <div>{item.title}</div>
      <br />
      <div className="smallfont">{item.description}</div>

      <br />

      <BubbleImg item={item} />
    </div>
  );
}

export default Card;
