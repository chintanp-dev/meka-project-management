function BubbleImg (props) {
    return (
        <>
        <div className="mainboximg" >
              {props.bubble.map((bubble) => {
                let red = Math.floor(Math.random() * 255);
                let green = Math.floor(Math.random() * 255);
                let blue = Math.floor(Math.random() * 255);

                return (
                  <div key={Math.random()}
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
        </>
    )
}

export default BubbleImg;