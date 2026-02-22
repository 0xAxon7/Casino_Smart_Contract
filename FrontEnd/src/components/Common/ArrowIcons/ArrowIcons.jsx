import PropTypes from "prop-types";
import React from "react";
import { ReactComponent as ARROW_1 } from "../../../assets/images/Frame (25).svg";
import { ReactComponent as ARROW_2 } from "../../../assets/images/Frame (26).svg";
import { StyledArrowIcons } from "./StyledArrowIcons";

const ArrowIcons = ({ scrollLeft, scrollRight }) => {
  return (
    <StyledArrowIcons>
      <button onClick={scrollLeft} className="arrow-style">
        <ARROW_1 />
      </button>
      <button onClick={scrollRight} className="arrow-style">
        <ARROW_2 />
      </button>
    </StyledArrowIcons>
  );
};

ArrowIcons.propTypes = {
  onArrowClick: PropTypes.func.isRequired,
};

export default ArrowIcons;
