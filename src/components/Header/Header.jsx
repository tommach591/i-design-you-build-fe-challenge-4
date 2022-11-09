import "./Header.css";
import Headset from "../../utils/headset.svg";

function Header({ isMobile }) {
  function getWeb() {
    return (
      <div className="Header">
        <h1 className="Logo">STAEM</h1>
        <div className="InstallButton">
          <div className="Headset">
            <img src={Headset} alt="" />
          </div>
          <div className="InstallText">
            <h2>Install</h2>
          </div>
        </div>
      </div>
    );
  }

  function getMobile() {
    return <div>Mobile</div>;
  }

  return isMobile ? getMobile() : getWeb();
}

export default Header;
