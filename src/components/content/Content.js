import "./Content.css";
import { AccordionComp } from "./accordionComp/AccordionComp.js";
import { Comp2 } from "./Comp2.js";
import { Comp3 } from "./Comp3.js";
export const Content = () => {
  return (
    <>
      <div id="content">
        <div id="AccordionComp">
          {/* id here has to agree with the id used in Hashlink in header  */}
          <AccordionComp></AccordionComp>
        </div>
        <div id="Comp2">
          <Comp2></Comp2>
        </div>
        <div id="Comp3">
          <Comp3></Comp3>
        </div>
      </div>
    </>
  );
};
