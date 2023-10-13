import DownArrow from "../../assets/downArrow.png";

function Header_2() {
  return (
    <div className="header2">
      <div className="board">Board</div>

      <div>
        This Week <img src={DownArrow} />
      </div>
    </div>
  );
}

export default Header_2;
