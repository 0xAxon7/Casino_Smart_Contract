import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import ArrowIcons from "../ArrowIcons/ArrowIcons";
import FilterButtonGroup from "../Buttons/FilterButtonGroup";
import { StyledSectionHeader } from "./styles";

const SectionHeader = ({
  iconHeader: Icon,
  sideButton,
  sideButtonLink,
  casinoText,
  hasRecommended,
  hasArrows = true,
  hasFilterOptions,
  onOptionChange,
  filterOptions,
  scrollLeft,
  scrollRight,
  style,
}) => {
  return (
    <StyledSectionHeader style={style}>
      <div className="icon-group">
        {Icon && <Icon className="icon-header" />}
        <span className="casino-text">{casinoText}</span>
        {sideButton && (
          <Link to={sideButtonLink}>
            <span className="view-all-text">{sideButton}</span>
          </Link>
        )}
      </div>

      <div style={{ display: "flex" }}>
        {hasRecommended && (
          <div className="recommended-button">
            <button className="recommended-button-text">Recommended</button>
          </div>
        )}
        {hasFilterOptions && (
          <FilterButtonGroup
            options={filterOptions}
            onOptionChange={onOptionChange} // Pass the callback for option change
          />
        )}
        {hasArrows && (
          <ArrowIcons scrollLeft={scrollLeft} scrollRight={scrollRight} />
        )}
      </div>
    </StyledSectionHeader>
  );
};

SectionHeader.propTypes = {
  casinoText: PropTypes.string.isRequired,
  icon1Src: PropTypes.string.isRequired,
  icon2Src: PropTypes.string.isRequired,
};

export default SectionHeader;
