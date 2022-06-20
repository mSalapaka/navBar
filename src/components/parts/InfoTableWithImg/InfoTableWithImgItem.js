import "./InfoTableWithImgItem.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome} from '@fortawesome/free-solid-svg-icons';

export const InfoTableWithImgItem = ({ jsonObj, imgSrcString }) => {
  let imgSrcStr = `${imgSrcString}/${jsonObj.avatar}`;
  return (
    <div className="infoTableWithImgItem">
      <div className="imageItem">
        <img src={imgSrcStr} alt="Image Not Found" className="imageStyle"></img>
      </div>
      <div className="infoItem">
        {jsonObj.name && <div className="nameItem"> {jsonObj.name} </div>}
        {jsonObj.designation && <div className="restOfItems"> {jsonObj.designation} </div>}
        {jsonObj.researchInterests && <div className="restOfItems"> Focus: {jsonObj.researchInterests} </div>}
        {jsonObj.phdUniv && (
          <div classNames="restOfItems"> {jsonObj.phdUniv} </div>
        )}
        {jsonObj.phdThesis && (
          <div classNames="restOfItems"> PhD Thesis {jsonObj.phdThesis} </div>
        )}
        {jsonObj.msUniv && (
          <div classNames="restOfItems"> {jsonObj.msUniv} </div>
        )}
        {jsonObj.msThesis && (
          <div classNames="restOfItems"> PhD Thesis {jsonObj.msThesis} </div>
        )}
        {jsonObj.bsUniv && (
          <div classNames="restOfItems"> {jsonObj.bsUniv} </div>
        )}
         {jsonObj.links && (
          <div classNames="restOfItems">
            {jsonObj.links.home && <a  href={jsonObj.links.home}> <FontAwesomeIcon icon={faHome} /> </a> }
            {jsonObj.links.linkedin && <a  href={jsonObj.links.linkedin}> LinkedIn</a> }
            {jsonObj.links.github && <a  href={jsonObj.links.github}> git</a> }
            {jsonObj.links.googleScholar && <a  href={jsonObj.links.googleScholar}> GoogleScholar</a> }
            </div>
        )}
      </div>
    </div>
  );
};
InfoTableWithImgItem.propTypes = {
  jsonObj: PropTypes.object.isRequired,
  imgSrcString: PropTypes.string.isRequired,
};
