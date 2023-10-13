import Dots from "../../assets/3_dots.png";
import Plus from "../../assets/plus.png";

const infoCard = [
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

export default function FlexBox_3() {
  return (
    <div className="flexboxes">
      <header className="header3">
        <div>Done</div>
        <div className="align_center">
          <img src={Plus}></img>
          <img src={Dots}></img>
        </div>
      </header>

      {infoCard.map(
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
                    {/* <div className="fontimage vh">{vh}</div> */}
                    {/* <div className="fontimage ag">{ag}</div> */}
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
