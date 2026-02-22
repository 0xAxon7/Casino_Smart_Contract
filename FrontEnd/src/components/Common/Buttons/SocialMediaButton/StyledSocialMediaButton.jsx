import styled from "styled-components";

export const StyledSocialMediaButton = styled.button`
  display: flex;
  padding: 11px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: rgba(31, 35, 48, 1);
  cursor: pointer;

  svg {
    color: #b1b6c6;
  }

  .btn-text {
    color: #b1b6c6;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.8px;
    letter-spacing: 0.5px;
  }

  &:hover {
    background: #181d27;
  }
`;
