import { React } from "react";
import { Draggable } from "react-beautiful-dnd";

import BubbleImg from "./BubbleImg";

function Card(props) {
    
//   console.log(Object.entries(props.cardData));

  return (
    <Draggable draggableId={props.cardData.id} index={props.index}>
      {(provided) => (
        <div 
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        innerRef={provided.innerRef} 
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

            {/* <BubbleImg item={item} /> */}
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
