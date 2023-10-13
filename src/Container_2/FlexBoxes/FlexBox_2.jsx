import Dots from "../../assets/3_dots.png";
import Plus from "../../assets/plus.png";

export default function FlexBox_2() {
  return (
    <div className="flexboxes">
      <header className="header3">
        <div>In Progress</div>
        <div className="align_center">
          <img src={Plus}></img>
          <img src={Dots}></img>
        </div>
      </header>

      <div className="card">
        <div className="header31">
          <div className="gray">🔴 DEVELOPMENT</div>
          <div className="align_center">
            <img src={Dots}></img>
          </div>
        </div>

        <div>Implement Design Screens</div>
        <br />

        <div className="smallfont">
          OurDesigners created 6 screens for a website that needs tobe
          implemented by our dev team.
        </div>
        <div>
          <br />
          <div className="mainboximg">
            <div className="fontimage vh">VH</div>
            <div className="fontimage lk">LK</div>
          </div>
        </div>
      </div>
    </div>
  );
}
