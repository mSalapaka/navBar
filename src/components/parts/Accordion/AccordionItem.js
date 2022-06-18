// Creates a AccordionItem using title and content which is toggleable
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<FontAwesomeIcon icon={faChevronDown, faChevronUp} className="bars" />
import "./AccordionItem.css"
import PropTypes from "prop-types";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
export const AccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
      <div className="accordionItem">
        <div className="accordionTitleBar"onClick={()=>setIsActive(!isActive)}>
          <div  className="accordionTitle">{title}</div>
          <div className="accorrdionTitleBarToggle"> {isActive ? <FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} />}</div>
        </div>
        {isActive && 
        <div className="accordionContent">
          <div>{content}</div>
        </div>}
      </div>
  );
};
AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
