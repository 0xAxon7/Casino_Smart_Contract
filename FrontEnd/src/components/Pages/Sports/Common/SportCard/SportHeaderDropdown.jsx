import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../../../../../context/AppContext";
import { optionsSport } from "../../SportsHeader/SportsHeader";
import FireIcon from "./FireIcon";
import { StyledHeaderDropdown } from "./styles";

const SportHeaderDropdown = ({ isOpen }) => {
  const location = useLocation();

  const { isMobileScreen, sportsSelectedOption, updateSportsSelectedOption } =
    useContext(AppContext);

  useEffect(() => {
    const updateQueryParams = () => {
      const urlParams = new URLSearchParams(location.search);
      const param = urlParams.get("bt-path");
      if (param) {
        updateSportsSelectedOption(param); // Update the global state
      }
    };

    // Call the function when the component mounts
    updateQueryParams();
  }, []);

  return (
    <StyledHeaderDropdown isOpen={isOpen} id="nav2">
      <div className="bt6357 bt7960 bt6360">
        <div className="bt6359 bt7964">
          <div className="bt7961 bt7964">
            {optionsSport.map((item, index) => {
              const buttonIsActive = item.url === sportsSelectedOption;

              return (
                <Link
                  to={`/sports?bt-path=${encodeURIComponent(item.url)}`}
                  onClick={() => updateSportsSelectedOption(item.url)}
                  key={index}
                >
                  <div className="bt7963">
                    <a className="bt7962 bt6207 bt7965" href="/soccer-1">
                      <div
                        className="bt7968"
                        data-editor-id="expandedNavbarIcon"
                      >
                        {item?.isFire && <FireIcon />}
                        <div
                          className={`bt7967 ${buttonIsActive ? "active" : ""}`}
                        >
                          {item.icon}
                        </div>
                      </div>
                      <span
                        className={`bt7970 ${buttonIsActive ? "active" : ""}`}
                      >
                        {item.name}
                      </span>
                    </a>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </StyledHeaderDropdown>
  );
};

export default SportHeaderDropdown;
