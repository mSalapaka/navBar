import { HashRouter} from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import "./Header.css";
import "@fontsource/roboto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
export const Header = () => {
  return (
    <HashRouter>
      <div id="navbar">
        <input type="checkbox" id="checkBoxForMenu" autoComplete="off"></input>
        <div className="headerP1">
          <div className="logo">
            <span>LogoGoesHere</span>
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
            <NavHashLink smooth to="#Comp1" className="linkStyle">
              {/* id here has to agree with the id used in id in Main.js  */}
              <span>Navlink1</span>
            </NavHashLink>
          </div>
          <div>
            <HashLink smooth to="#Comp2" className="linkStyle">
              <span>Navlink2</span>
            </HashLink>
          </div>
          <div>
            <HashLink smooth to="#Comp3" className="linkStyle">
              <span>Navlink3</span>
            </HashLink>
            <ul>
              <li>  <HashLink smooth to="#Comp3Current" className="linkStyle"> Current </HashLink></li>
              <li> <HashLink smooth to="#Comp3Alumni" className="linkStyle"> Alumni</HashLink> </li>
            </ul>
          </div>
        </div>
      </div>
    </HashRouter>
  );
};
