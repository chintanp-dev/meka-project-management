import Plus from "../assets/plus.png";
import Dots from "../assets/3_dots.png";

const initialData = {
  cardData: {
   "a1": {
      id: "a1",
      category: "🟢 DESIGN SYSTEM",
      title: "Hero Section",
      description:
        "Create a Design system for a Hero Section in 2 Different variants. Create a symple presentation with these components.",
      dot: Dots,
      bubble: ["VH", "AG"],
    },
    "a2": {
      id: "a2",
      category: "🔵 TYPOGRAPHY",
      title: "Typography change",
      description:
        "Modify Typography and styling of textplaced on 6 screens of the website Design. prepare the Documentation.",
      dot: Dots,
      bubble: ["ML"],
    },
    "b1": {
      id: "b1",
      category: "🔴 DEVELOPMENT",
      title: "Implement Design Screens",
      description:
        "OurDesigners created 6 screens for a website that needs tobe implemented by our dev team.",
      dot: Dots,
      bubble: ["VH", "LK"],
    },
    "c1": {
      id: "c1",
      category: "🔴 DEVELOPMENT",
      title: "Fix bugs in the CSS code",
      description:
        "Fix small bugs that are essentialto prepare for the next release that will happenthis quarter.",
      dot: Dots,
      bubble: ["HU", "NL"],
    },
    "c2": {
      id: "c2",
      category: "🔵 TYPOGRAPHY",
      title: "Proofread final text",
      description:
        "The text provided by marketing department needs to be proofread so that we make surethat it fits into our design.",
      dot: Dots,
      bubble: ["AG"],
    },
    "c3": {
      id: "c3",
      category: "🟢 DESIGN SYSTEM",
      title: "Responsive Design",
      description:
        "All design needs to be Responsive. the Requirement is that it fits all web and mobile screens.",
      dot: Dots,
      bubble: ["VH", "AG"],
    },
  },

  cardHolderData: {
    "cardHolderData-1": {
      id: "a",
      title: "To Do",
      plus: Plus,
      dot: Dots,
      cardId: ['a1','a2'],
    },
    "cardHolderData-2": {
      id: "b",
      title: "In Progress",
      plus: Plus,
      dot: Dots,
      cardId: ['b1'],
    },
    "cardHolderData-3": {
      id: "c",
      title: "Done",
      plus: Plus,
      dot: Dots,
      cardId: ['c1', 'c2', 'c3'],
    },
  },
  cardHolderDataOrder: ['cardHolderData-1', 'cardHolderData-2', 'cardHolderData-3'],
};

export default initialData;
