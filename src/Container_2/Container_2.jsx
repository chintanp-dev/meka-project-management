import Header_1 from "./Header/Header_1";
import Header_2 from "./Header/Header_2";
import MainBox from "./MainBox";

import "../Container_2.css";



const Container_2 = () => {
  return (
    <div className="container2">
      <header>
        <Header_1 />

        <Header_2 />
      </header>

      <MainBox />
    </div>
  );
};

export default Container_2;
