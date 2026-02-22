import styled from "styled-components";

export const StyledNavigationHeader = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  column-gap: 6px;
  max-width: 100%;

  .content-wrapper {
    flex: 1 1 0%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 12px;
    white-space: nowrap;
    overflow: auto hidden;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const StyledNavHeaderBtn = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 32px;
  min-height: 32px;
  padding: 5px 8px;
  border-radius: 8px;
  transition: all 0.1s ease 0s;
  font-size: 14px;
  user-select: none;
  cursor: pointer;
  text-transform: none;

  font-weight: 500;
  font-style: normal;

  color: ${({ isActive }) =>
    isActive ? "rgb(23, 25, 36)" : "rgb(255,255,255)"};
  background: ${({ isActive }) =>
    isActive ? "rgb(255, 232, 26)" : "rgb(33, 37, 50)"};
  box-shadow: ${({ isActive }) =>
    isActive
      ? "rgba(255, 255, 255, 0.2) 0px 1px 0px inset,rgba(0, 0, 0, 0.15) 0px -3px 0px inset, rgb(255, 176, 25) 0px 0px 15px inset"
      : "none"};

  .btn-icon {
    margin: 0px 8px 0px -1px;
  }

  &:hover {
    background: ${({ isActive }) => !isActive && "rgb(33, 37, 50, 0.5)"};
  }
`;
