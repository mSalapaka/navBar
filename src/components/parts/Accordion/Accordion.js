// Creates a Accordion using elements in jsonData with a header accordionHeader
import { AccordionItem } from "./AccordionItem.js";
import "./Accordion.css";
import PropTypes from "prop-types";

export const Accordion = ({ jsonData, accordionHeader }) => {
  return (
    <>
    <div className="accordion">
    <div className="accordionHeader">{accordionHeader}</div>
      <div>
        {jsonData.map(({ title, content }, index) => (
          <AccordionItem
            key={index}
            title={title}
            content={content}
          ></AccordionItem>
        ))}
      </div>

    </div>
     
    </>
  );
};
Accordion.propTypes = {
  jsonData: PropTypes.array.isRequired,
  accordionHeader: PropTypes.string.isRequired,
};
