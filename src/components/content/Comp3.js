import { Comp3Alumni } from "./Comp3Alumni";
import { Comp3Current } from "./Comp3Current";
import "./Comp3.css"
export const Comp3 = () => {
  return (
    <div id="Comp3Comp">
      <div id="Comp3Current">
        <Comp3Current ></Comp3Current>
      </div>
      <div id="Comp3Alumni">
        <Comp3Alumni ></Comp3Alumni>
      </div>
    </div>
  );
};
