import { InfoTableWithImg } from "../../parts/InfoTableWithImg/InfoTableWithImg"
import people from "./people.json"
export const InfoTableWithImgComp = () => {
let imgSrcString="./data/images"
let currentJsonArray= people.current
console.log(currentJsonArray)
  return (
    <>
     <InfoTableWithImg jsonArrayData={currentJsonArray} imgSrcString={imgSrcString} infoTableWithImgHeader="Current"> </InfoTableWithImg>
    </>
  );
};
