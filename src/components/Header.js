import { HashRouter} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
export const Header = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}


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
            <HashLink smooth to="#AccordionComp" scroll={scrollWithOffset} className="linkStyle">
              {/* id here has to agree with the id used in id in Main.js  */}
              <span>Accordion</span>
            </HashLink>
          </div>
          <div>
            <HashLink smooth to="#InfoTableWithImgComp" className="linkStyle">
              <span>InfoTableWithImg</span>
            </HashLink>
          </div>
          <div>
            <HashLink smooth to="#Comp3" scroll={scrollWithOffset} className="linkStyle">
              <span>DropDown</span>
            </HashLink>
            <ul>
              <li>  <HashLink smooth to="#Comp3Current" scroll={scrollWithOffset}  className="linkStyle"> Current </HashLink></li>
              <li> <HashLink smooth to="#Comp3Alumni" scroll={scrollWithOffset} className="linkStyle"> Alumni</HashLink> </li>
            </ul>
          </div>
          <div>
            <HashLink smooth to="#PubTableComp" scroll={scrollWithOffset} className="linkStyle">
              <span>PubTable</span>
            </HashLink>
          </div>
        </div>
      </div>
    </HashRouter>
  );
};
