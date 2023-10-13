import Dots from "../../assets/3_dots.png";
import Plus from "../../assets/plus.png";

export default function FlexBox_1({infoCard_1}) {
  return (
    <div className="flexboxes">
      <header className="header3">
        <div>To Do</div>
        <div className="align_center">
          <img src={Plus}></img>
          <img src={Dots}></img>
        </div>
      </header>

      {infoCard_1.map(({ id, category, title, description, dot, vh, ag, lk }) => {
        return (
          <>
            <div className="card">
              <div className="header31" key={id}>
                <div className="gray">{category}</div>
                <div className="align_center">
                  <img src={dot}></img>
                </div>
              </div>
              <div>{title}</div>
              <br />
              <div className="smallfont">{description}</div>
              <div>
                <br />
                <div className="mainboximg">
                  <div className="fontimage vh">{vh}</div>
                  <div className="fontimage ag">{ag}</div>
                  <div className="fontimage lk">{lk}</div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
