// Creates Image Table using elements in jsonData with a header imgTableHeader
import { InfoTableWithImgItem } from "./InfoTableWithImgItem";
import "./InfoTableWithImg.css";
import PropTypes from "prop-types";
export const InfoTableWithImg = ({
  jsonArrayData,
  imgSrcString,
  infoTableWithImgHeader,
}) => {
  return (
    <>
      <div className="infoTableWithImg">
        <div className="infoTableWithImgHeader">{infoTableWithImgHeader} </div>
        <div>
          {jsonArrayData.map((jsonObj, index) => (
            <InfoTableWithImgItem
              key={index}
              jsonObj={jsonObj}
              imgSrcString={imgSrcString}
            ></InfoTableWithImgItem>
          ))}
        </div>
      </div>
    </>
  );
};
