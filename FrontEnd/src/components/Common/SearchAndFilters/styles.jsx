import styled from "styled-components";
import SEARCH_ICON from "../../../assets/images/navbar-search-icon.svg";

export const StyledSearchFilters = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  padding-bottom: 24px;

  .provider-text {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px 0px 0px 4px;
    min-width: 0px;
    color: rgb(255, 176, 24);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const SearchInput = styled.input`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 50px;
  min-height: 50px;
  width: 100%;
  padding: 0px 5px 0px 15px;
  border-radius: 6px;
  border: 1px solid transparent;
  background: rgba(15, 17, 26, 0.55);
  color: #fff;
  transition: background 0.1s ease 0s;
  flex: 1 1 0%;
  min-width: 170px;

  padding: 9px 4px 9px 40px;
  background: rgba(15, 17, 26, 0.55) url(${SEARCH_ICON}) no-repeat 13px center;
`;

export const ButtonWithDropdown = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  white-space: nowrap;
  transition: all 0.1s ease 0s;
  appearance: none;
  border: none;
  letter-spacing: 0.5px;
  cursor: pointer;
  user-select: none;
  height: 48px;
  border-radius: 8px;
  font-size: 14px;

  font-weight: 500;
  font-style: normal;
  text-transform: none;
  background: rgba(203, 215, 255, 0.03);
  padding: 0px 12px 0px 16px;
  max-width: 100%;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: rgb(177, 182, 198);
`;
