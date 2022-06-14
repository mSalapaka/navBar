import "./Header.css";
import "@fontsource/roboto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
export const Header = () => {
  return (
    <>
      <div id="navbar">
        <input type="checkbox" id="checkBoxForMenu" autoComplete="off"></input>
        <div className="headerP1">
          <div className="logo">
            <span >LogoGoesHere</span>
          </div>
          <div className="blank">
            <span> </span>
          </div>
          <div className="barsTimes">
            <label htmlFor="checkBoxForMenu">
              <span>
                <FontAwesomeIcon icon={faBars} className="bars" />
                <FontAwesomeIcon icon={faTimes} className="times" />
              </span>
            </label>
          </div>

        </div>

        <div id="navLinks">
          <div>
            <span>Navlink1</span>
            <ul>
              <li> Current</li>
              <li> Past</li>
            </ul>
          </div>
          <div>
            <span>Navlink2</span>
            <ul>
              <li> Current</li>
              <li> Past</li>
            </ul>
          </div>
          <div>
            <span>Navlink3</span>
            <ul>
              <li> Current</li>
              <li> Past</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
