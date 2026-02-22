import styled from "styled-components";

export const StyleAccountTabs = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  column-gap: 6px;
  max-width: 100%;
  margin-bottom: 24px;

  .container-tabs {
    flex: 1 1 0%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 12px;
    white-space: nowrap;
    overflow: auto hidden;
  }

  .tab {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 40px;
    min-height: 40px;
    padding: 0px 16px;
    border-radius: 8px;
    color: rgb(177, 182, 198);
    background: rgba(203, 215, 255, 0.03);
    text-transform: uppercase;
    transition: all 0.1s ease 0s;
    font-size: 14px;
    font-family: "Geogrotesque Wide", sans-serif;
    font-weight: 800;
    font-style: normal;
    cursor: pointer;
    user-select: none;
  }

  .active {
    background: rgba(203, 215, 255, 0.075);
    color: rgb(255, 255, 193);
    text-shadow: rgb(255, 93, 0) 0px 0px 10px;
  }
`;
