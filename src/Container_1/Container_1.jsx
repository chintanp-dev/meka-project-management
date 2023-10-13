import Grid from "../assets/grid.png";
import Database from "../assets/database.png";
import Settings from "../assets/settings.png";
import Codesandbox from "../assets/codesandbox.png";
import Layout from "../assets/layout.png";

import "../Container_1.css";

function Container_1() {
  return (
    <div className="container1">
      <div className="item1 item11">
        <div>
          <img src={Codesandbox}></img>
        </div>
        <div>
          <b>Pro Manager</b>
        </div>
      </div>

      <div className="item1 item12">
        <div>
          <img src={Grid}></img>
        </div>
        <div>Dashboard</div>
      </div>

      <div className="item1 item13">
        <div>
          <img src={Layout}></img>
        </div>
        <div>
          <b>Board</b>
        </div>
      </div>

      <div className="item1 item14">
        <div>
          <img src={Database}></img>
        </div>
        <div>Analytics</div>
      </div>

      <div className="item1 item15">
        <div>
          <img src={Settings}></img>
        </div>
        <div>Settings</div>
      </div>

      <div className="item1 item16">
        <div>
          <img src={Settings}></img>
        </div>
        <div>Log Out</div>
      </div>
    </div>
  );
}

export default Container_1;
