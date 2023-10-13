import Header_1 from "./Header/Header_1";
import Header_2 from "./Header/Header_2";
import FlexBox_1 from "./FlexBoxes/FlexBox_1";
import FlexBox_2 from "./FlexBoxes/FlexBox_2";
import FlexBox_3 from "./FlexBoxes/FlexBox_3";
import Dots from "../assets/3_dots.png";

import "../Container_2.css";

const infoCard_1 = [
  {
    id: "a1",
    category: "🟢 DESIGN SYSTEM",
    title: "Hero Section",
    description:
      "Create a Design system for a Hero Section in 2 Different variants. Create a symple presentation with these components.",
    dot: Dots,
    vh: "VH",
    ag: "AG",
    lk: "LK",
  },
  {
    id: "a2",
    category: "🔵 TYPOGRAPHY",
    title: "Typography change",
    description:
      "Modify Typography and styling of textplaced on 6 screens of the website Design. prepare the Documentation.",
    dot: Dots,
    ml: "ML",
  },
];

const infoCard_2 = [
  {
    id: "b1",
    category: "🔴 DEVELOPMENT",
    title: "Implement Design Screens",
    description:
      "OurDesigners created 6 screens for a website that needs tobe implemented by our dev team.",
    dot: Dots,
    vh: "VH",
    lk: "LK",
  },
];

const infoCard_3 = [
  {
    id: "c1",
    category: "🔴 DEVELOPMENT",
    title: "Fix bugs in the CSS code",
    description:
      "Fix small bugs that are essentialto prepare for the next release that will happenthis quarter.",
    dot: Dots,
    hu: "HU",
    nl: "NL",
  },
  {
    id: "c2",
    category: "🔵 TYPOGRAPHY",
    title: "Proofread final text",
    description:
      "The text provided by marketing department needs to be proofread so that we make surethat it fits into our design.",
    dot: Dots,
    ag: "AG",
  },
  {
    id: "c3",
    category: "🟢 DESIGN SYSTEM",
    title: "Responsive Design",
    description:
      "All design needs to be Responsive. the Requirement is that it fits all web and mobile screens.",
    dot: Dots,
    vh: "VH",
    ag: "AG",
  },
];

const Container_2 = () => {
  return (
    <div className="container2">
      <header>
        <Header_1 />

        <Header_2 />
      </header>

      <div className="main">
        <FlexBox_1 infoCard_1={infoCard_1} />

        <FlexBox_2 infoCard_2={infoCard_2}/>

        <FlexBox_3 infoCard_3={infoCard_3}/>
      </div>
    </div>
  );
};

export default Container_2;
