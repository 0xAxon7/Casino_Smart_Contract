import styled from "styled-components";

export const StyledAccountDropdown = styled.div`
  .hello-text {
    color: #b1b6c6;
    margin: 20px 15px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }

  .dropdown-option {
    list-style: none;
    font-size: 14px;
    display: flex;
    margin: 10px 15px;
    width: 170px;
    padding: 10px 17px;
    align-items: center;
    border-radius: 8px;
    background: rgba(203, 215, 255, 0.03);
    color: rgb(255, 255, 255);

    &:hover {
      color: rgb(255, 255, 255);
      background: rgba(203, 215, 255, 0.055);
    }
  }

  .link {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    gap: 10px;
    color: #fff;
  }
`;
