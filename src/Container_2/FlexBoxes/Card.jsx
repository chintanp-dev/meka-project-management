import { React } from "react";
import { Draggable } from "react-beautiful-dnd";
import BubbleImg from "./BubbleImg";

function Card(props) {
  return (
    <Draggable draggableId={props.cardData.id} index={props.index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="card">
            <div className="header31">
              <div className="gray">{props.cardData.category}</div>
              <div className="align_center">
                <img src={props.cardData.dot}></img>
              </div>
            </div>

            <div>{props.cardData.title}</div>
            <br />
            <div className="smallfont">{props.cardData.description}</div>

            <br />

            {/* <BubbleImg item={props.cardData.bubble} /> */}
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
