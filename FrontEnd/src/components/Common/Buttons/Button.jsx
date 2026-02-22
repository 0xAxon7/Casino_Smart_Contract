import { Button as MuiButton } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

export const StyledButton = styled(MuiButton)`
  && {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    transition: all 0.1s ease 0s;
    appearance: none;
    border: none;
    cursor: pointer;
    user-select: none;
    height: 40px;
    border-radius: 8px;
    padding: 0px 12px;
    background: rgba(203, 215, 255, 0.03);
    color: #fff;
    font-weight: 800;
    font-size: 14px;
    font-style: normal;
    text-transform: uppercase;
    min-width: 40px;

    &:hover {
      background: rgba(203, 215, 255, 0.055);
    }
  }
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
