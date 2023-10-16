function FlexBox({ parentInfoCard }) {
  return parentInfoCard.map((props) => (
    <div className="flexboxes" key={props.id}>
      <header className="header3">
        <div>{props.title}</div>
        <div className="align_center">
          <img src={props.plus}></img>
          <img src={props.dot}></img>
        </div>
      </header>

      {props.infoCard.map((item) => (
        <div className="card" key={item.id}>
          <div className="header31">
            <div className="gray">{item.category}</div>
            <div className="align_center">
              <img src={item.dot}></img>
            </div>
          </div>
          <div>{item.title}</div>
          <br />
          <div className="smallfont">{item.description}</div>
          <div>
            <br />
            <div className="mainboximg">
              {item.bubble.map((bubble) => {
                let red = Math.floor(Math.random() * 255);
                let green = Math.floor(Math.random() * 255);
                let blue = Math.floor(Math.random() * 255);

                return (
                  <div
                    className="fontimage"
                    style={{
                      backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                      // backgroundColor:
                      //   "rgb(" + red + "," + green + "," + blue + ")",
                    }}
                  >
                    {bubble}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  ));
}

export default FlexBox;
