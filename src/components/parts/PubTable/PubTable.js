// Creates Image Table using elements in jsonData with a header imgTableHeader
import { useState } from "react";
import { PubTableItem } from "./PubTableItem";
import "./PubTable.css";
import PropTypes from "prop-types";
export const PubTable = ({ jsonArrayData, dataSrcString, pubTableTitle }) => {
  const [searchString, setSearchString] = useState("");
  const [filteredJsonArrayData, setFilteredJsonArrayData] = useState(jsonArrayData);
 

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchString(e.target.value);
    console.log(searchString);
    setFilteredJsonArrayData(jsonArrayData.filter((jsonObj) => {
      return Object.values(jsonObj).toString().toLowerCase().includes(searchString.toLowerCase());
  }))
};
  

  const handleChange =(e)=>{
    e.preventDefault();
    console.log(searchString);
    setSearchString(e.target.value);

  }

  
  return (
    <>
      <div className="pubTable">
        <div className="pubTableHeader">
          <div className="pubTableTitle">{pubTableTitle}</div>
          <div className="pubTableSearchFilter">
            <form onSubmit={handleSubmit} >
              <div>
                <label htmlFor="searchString"></label>
                <input id="searchString" type="text" placeholder="search" value={searchString} onChange={handleChange} />
              </div>
              {/* <button type="submit" >Submit</button> */}
            </form>
            
          </div>
        </div>
        <div>
          {filteredJsonArrayData.map((jsonObj, index) => (
            //  Note key is not passed in props
            <PubTableItem
              key={index}
              rowIndex={index}
              jsonObj={jsonObj}
              dataSrcString={dataSrcString}
            ></PubTableItem>
          ))}
          {filteredJsonArrayData==[] && <div> No Results</div>}
          
        </div>
      </div>
    </>
  );
};
