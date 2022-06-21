import "./PubTableItem.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PubTableItem = ({rowIndex,jsonObj, dataSrcString }) => {
  let evenOddStatusClass;
  rowIndex%2==0 ? evenOddStatusClass="evenPubItem": evenOddStatusClass="oddPubItem"
  //console.log(evenOddStatusClass)
  return (
    <div className={`pubTableItem ${evenOddStatusClass}`}>
      <div className="pubTableItemTitle">
        {jsonObj.title && jsonObj.title}
      </div>
      <div className="pubTableItemYear">
      {jsonObj.year && jsonObj.year}
      </div>
      <div className="pubTableItemLink">
      {jsonObj.pdflink && <a href={`${dataSrcString}/${jsonObj.pdflink}`}> pdf </a> }  
      </div>
    </div>
  );
};
PubTableItem.propTypes = {
  jsonObj: PropTypes.object.isRequired,
  dataSrcString: PropTypes.string.isRequired,
};
