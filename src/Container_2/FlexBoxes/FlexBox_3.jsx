import Dots from "../../assets/3_dots.png";
import Plus from "../../assets/plus.png";



export default function FlexBox_3({infoCard_3}) {
  return (
    <div className="flexboxes">
      <header className="header3">
        <div>Done</div>
        <div className="align_center">
          <img src={Plus}></img>
          <img src={Dots}></img>
        </div>
      </header>

      {infoCard_3.map(
        ({ id, category, title, description, dot, hu, nl, ag, vh }) => {
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
                    <div className="fontimage hu">{hu}</div>
                    <div className="fontimage nl">{nl}</div>
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

const Func = function (Addition, Substraction) {
  const a = 1;
  const s = 2;
  return Addition + a;
};
