import "./Content.css";
import { Comp1 } from "./Comp1.js";
import { Comp2 } from "./Comp2.js";
import { Comp3 } from "./Comp3.js";
export const Content = () => {
  return (
    <>
      <div id="content">
        <div id="Comp1">
          {/* id here has to agree with the id used in Hashlink in header  */}
          <Comp1></Comp1>
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
