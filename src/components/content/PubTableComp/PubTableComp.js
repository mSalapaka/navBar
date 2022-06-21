import { PubTable } from "../../parts/PubTable/PubTable"
import pubsJsonArray from "./publications.json"
export const PubTableComp = () => {
let dataSrcString="./data/publications"


  return (
    <div id="PubTableComp">
     <PubTable jsonArrayData={pubsJsonArray} dataSrcString={dataSrcString} pubTableTitle="Publications"> </PubTable>
    </div>
  );
};
