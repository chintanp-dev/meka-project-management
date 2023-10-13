import Dots from "../../assets/3_dots.png";
import Plus from "../../assets/plus.png";

const infoCard = [
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
]

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

      {infoCard.map(
        ({ id, category, title, description, dot, vh,lk }) => {
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
                    <div className="fontimage lk">{lk}</div>
                  </div>
                </div>
              </div>
            </>
          );
        }
      )}
    </div>
  );
}
