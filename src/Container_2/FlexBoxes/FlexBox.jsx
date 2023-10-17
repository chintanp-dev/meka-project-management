// import { DragDropContext } from "react-beautiful-dnd";
import Card from "./Card";

function FlexBox({ parentInfoCard }) {
  return (
    <>
      {parentInfoCard.map((props) => (
        <div className="flexboxes" key={props.id}>
          <header className="header3">
            <div>{props.title}</div>
            <div className="align_center">
              <img src={props.plus}></img>
              <img src={props.dot}></img>
            </div>
          </header>

          <Card props={props} />
        </div>
      ))}
    </>
  );
}

export default FlexBox;
