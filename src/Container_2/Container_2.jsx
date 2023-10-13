import Header_1 from "./Header/Header_1";
import Header_2 from "./Header/Header_2";
import FlexBox_1 from "./FlexBoxes/FlexBox_1";
import FlexBox_2 from "./FlexBoxes/FlexBox_2";
import FlexBox_3 from "./FlexBoxes/FlexBox_3";

import "../Container_2.css";

const Container_2 = () => {
  return (
    <div className="container2">
      <header>
        <Header_1 />

        <Header_2 />
      </header>

      <div className="main">
        <FlexBox_1 />

        <FlexBox_2 />

        <FlexBox_3 />
      </div>
    </div>
  );
};

export default Container_2;
