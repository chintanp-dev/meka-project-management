// import { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import Card from "./Card_org";

// function CardHolder({ parentInfoCard }) {
//   const [cardHolder, updateCardHolder] = useState(parentInfoCard);

//   function handleOnDragEnd(result) {
//     if (!result.destination) return;

//     updateCardHolder((prevState) => {
//       const [reorderedItem] = prevState.splice(result.source.index, 1);
//       prevState.splice(result.destination.index, 0, reorderedItem);
//       prevState = structuredClone(prevState);
//       return prevState;
//     });
//   }

//   return (
//     <DragDropContext onDragEnd={handleOnDragEnd}>
//       <Droppable droppableId="cardHolder" direction="horizontal">
//         {(provided) => (
//           <div
//             className="main"
//             {...provided.droppableProps}
//             ref={provided.innerRef}
//           >
//             {cardHolder.map((props, index) => {
//               return (
//                 <Draggable key={props.id} draggableId={props.id} index={index}>
//                   {(provided) => (
//                     <div
//                       className="flexboxes"
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       ref={provided.innerRef}
//                     >
//                       <header className="header3">
//                         <div>{props.title}</div>
//                         <div className="align_center">
//                           <img src={props.plus}></img>
//                           <img src={props.dot}></img>
//                         </div>
//                       </header>

//                       <Card props={props} />
//                     </div>
//                   )}
//                 </Draggable>
//               );
//             })}

//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// }

// export default CardHolder;
