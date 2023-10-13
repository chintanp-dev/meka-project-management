import Bell from "../../assets/bell.png";
import Question from "../../assets/question.png";
import Profile from "../../assets/profile.png";
import Search from "../../assets/search.png";

const Header_1 = () => {
  return (
    <div className="header1">
      <img
        className="menuicon"
        src="https://cdn-icons-png.flaticon.com/512/660/660376.png"
      />

      <div className="header11">
        <img src={Search}></img>
        <input type="text" id="Search" placeholder="  Search" />
      </div>
      <div className="icon21">
        <div>
          <img src={Question}></img>
        </div>
        <div>
          <img src={Bell}></img>
        </div>
        <div>
          <img src={Profile} />
        </div>
      </div>
    </div>
  );
};

export default Header_1;
