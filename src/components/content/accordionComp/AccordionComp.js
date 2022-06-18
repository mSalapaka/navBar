import { Accordion } from "../../parts/Accordion/Accordion.js";
import {accordionData} from "./sampleJsonData"
export const AccordionComp = () => {
  const sizedJsonData = accordionData.filter((item, index) => index < 3);// limits the number of entries to 3
  return (
    <>
      <Accordion
        jsonData={sizedJsonData}
        accordionHeader="Accordion Header1"
      ></Accordion>
    </>
  );
};
