import Dots from "../../assets/3_dots.png";
import Plus from "../../assets/plus.png";

export default function FlexBox_1() {
  return (
    <div className="flexboxes">
      <header className="header3">
        <div>To Do</div>
        <div className="align_center">
          <img src={Plus}></img>
          <img src={Dots}></img>
        </div>
      </header>

      <div className="card">
        <div className="header31">
          <div className="gray">🟢 DESIGN SYSTEM</div>
          <div className="align_center">
            <img src={Dots}></img>
          </div>
        </div>

        <div>Hero Section</div>
        <br />

        <div className="smallfont">
          Create a Design system for a Hero Section in 2 Different variants.
          Create a symple presentation with these components.
        </div>
        <div>
          <br />
          <div className="mainboximg">
            <div className="fontimage vh">VH</div>
            <div className="fontimage ag">AG</div>
            <div className="fontimage lk1">LK</div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="header31">
          <div className="gray">🔵 TYPOGRAPHY</div>
          <div className="align_center">
            <img src={Dots}></img>
          </div>
        </div>

        <div>Typography change</div>
        <br />

        <div className="smallfont">
          Modify Typography and styling of textplaced on 6 screens of the
          website Design. prepare the Documentation.
        </div>
        <div>
          <br />
          <div className="fontimage ml">ML</div>
        </div>
      </div>
    </div>
  );
}
