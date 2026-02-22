import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { StyledFilterButtonGroup } from "./styles";

const FilterButtonGroup = ({ options, onOptionChange }) => {
  const [activeOption, setActiveOption] = useState(options[0]);

  useEffect(() => {
    onOptionChange(activeOption); // Trigger option change when activeOption changes
  }, [activeOption, onOptionChange]);

  const handleOptionChange = (option) => {
    setActiveOption(option);
  };

  return (
    <StyledFilterButtonGroup>
      <div className="btn-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={`button ${option === activeOption ? "btn-active" : ""}`}
            onClick={() => handleOptionChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </StyledFilterButtonGroup>
  );
};

FilterButtonGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeClass: PropTypes.string.isRequired,
  inactiveClass: PropTypes.string.isRequired,
  onOptionChange: PropTypes.func.isRequired, // Callback for option change
};

export default FilterButtonGroup;
