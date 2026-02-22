import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  StyledNavHeaderBtn,
  StyledNavigationHeader,
} from "../../Common/NavigationHeader/styles";
import { AppContext } from "../../../context/AppContext";

const NFTNavigationHeader = (props) => {
  const { selectedOption, updateSelectedOption } = useContext(AppContext);
  const [buttons, setButtons] = useState(props.buttons);

  return (
    <StyledNavigationHeader>
      <div className="content-wrapper">
        {buttons.map((button, index) => (
          <Link
            to={button.url}
            onClick={() => updateSelectedOption(button.url)}
          >
            <StyledNavHeaderBtn
              className={button.url === selectedOption ? "active" : ""}
              style={{ textTransform: "uppercase" }}
            >
              {button.label}
            </StyledNavHeaderBtn>
          </Link>
        ))}
      </div>
    </StyledNavigationHeader>
  );
};

export default NFTNavigationHeader;
