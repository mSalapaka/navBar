import "./Content.css";
import { AccordionComp } from "./accordionComp/AccordionComp.js";
import { InfoTableWithImgComp} from "./InfoTableWithImgComp/InfoTableWithImgComp.js";
import { Comp3 } from "./Comp3.js";
export const Content = () => {
  return (
    <>
      <div id="content">
        <div id="AccordionComp">
          {/* id here has to agree with the id used in Hashlink in header  */}
          <AccordionComp></AccordionComp>
        </div>
        <div id="InfoTableWithImgComp">
          <InfoTableWithImgComp></InfoTableWithImgComp>
        </div>
        <div id="Comp3">
          <Comp3></Comp3>
        </div>
      </div>
    </>
  );
};
