import React from "react";
import styled from "styled-components";

export const StyledInput = styled.input`
  color: #fff;
  background-color: rgba(15, 17, 26, 0.55);
  height: 40px;
  padding: 12px 16px;
  border-radius: 10px;
`;

const Input = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
