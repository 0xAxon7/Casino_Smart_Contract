import styled from "styled-components";

export const StyledNavigationHeader = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  column-gap: 6px;
  max-width: 100%;
  margin-block: 24px;

  .active {
    color: rgb(255, 255, 193);
    text-shadow: rgb(255, 93, 0) 0px 0px 10px;
  }

  .active-icon {
    filter: drop-shadow(rgb(255, 93, 0) 0px 0px 6px);
  }

  .content-wrapper {
    flex: 1 1 0%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 12px;
    white-space: nowrap;
    overflow: auto hidden;
  }
`;

export const StyledNavHeaderBtn = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 40px;
  min-height: 40px;
  padding: 0px 16px;
  border-radius: 8px;
  transition: all 0.1s ease 0s;
  font-size: 14px;
  user-select: none;
  cursor: pointer;
  background: rgba(203, 215, 255, 0.075);
  color: rgb(177, 182, 198);
  text-transform: none;

  font-weight: 500;
  font-style: normal;

  .btn-icon {
    margin: 0px 8px 0px -1px;
  }
`;
