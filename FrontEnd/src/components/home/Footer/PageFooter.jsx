import React from "react";
import styled from "styled-components";

//assets
import LOGO from "../../../assets/LOGO Gamblify/Full LOGO.png";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  max-width: 100%;
  bottom: 0;
  padding-inline: 20px;
  background: #141622;

  .logo {
    margin-bottom: 20px;
    width: 100%;
    max-width: 200px;
  }

  .footer-container {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 55px 30px;
    font-size: 14px;
    max-width: 1020px;
    width: 100%;
    margin: 0px auto;

    @media (max-width: 800px) {
      flex-wrap: wrap;
    }
  }

  .footer-column {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 374px) {
      width: 50%;
    }

    @media (min-width: 440px) {
      width: auto;
    }

    @media (max-width: 800px) {
      margin-bottom: 30px;

      &:first-of-type {
        width: 100%;
        margin: 20px 0px 0px;
        order: 100;
      }
    }
  }
`;

const StyledP = styled.p`
  color: rgb(255, 255, 255);
  font-weight: 800;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const StyledLink = styled.a`
  margin-bottom: 10px;
  font-weight: 500;
  cursor: pointer;
  color: rgb(177, 182, 198);

  &:hover {
    color: rgb(255, 176, 24);
    text-decoration: underline;
  }
`;

const StyledCopyrightText = styled.p`
  color: #b1b6c6;
  max-width: 310px;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  margin-bottom: 16px;
`;

const PageFooter = () => {
  return (
    <FooterWrapper>
      <div className="footer-container">
        <div className="footer-column">
          <img src={LOGO} alt="" className="logo" />
          <StyledCopyrightText>
            Copyright © 2023 AK47.com. All rights reserved. AK is a brand name
            of Anoukha Gaming A.K. Company Address: Bangalore, karnataka, India,
            560090.
          </StyledCopyrightText>
          <StyledCopyrightText>
            Anoukha Gaming A.K. payments can be processed by WINGAMING SUPPORT
            LIMITED (Registration Number HE406701). Company Address: Avlonos, 1,
            MARIA HOUSE, 1075, Nicosia, Cyprus.
          </StyledCopyrightText>
          <StyledCopyrightText>
            Crypto trading is not gambling, and therefore not covered by our
            gaming license.
          </StyledCopyrightText>
        </div>

        <div className="footer-column">
          <StyledP>PLATFORM</StyledP>
          <StyledLink href="#">Support</StyledLink>
          <StyledLink href="#">FAQ</StyledLink>
          <StyledLink href="#">Partnership Program</StyledLink>
          <StyledLink href="#">Blog</StyledLink>
          <StyledLink href="#">Help Center</StyledLink>
        </div>
        <div className="footer-column">
          <StyledP>ABOUT US</StyledP>
          <StyledLink href="#">AML Policy</StyledLink>
          <StyledLink href="#">Sports Policy</StyledLink>
          <StyledLink href="#">Responsible Gaming</StyledLink>
          <StyledLink href="#">Privacy Policy</StyledLink>
          <StyledLink href="#">Terms and Conditions</StyledLink>
        </div>
        <div className="footer-column">
          <StyledP>COMMUNITY</StyledP>
          <StyledLink href="#">Facebook</StyledLink>
          <StyledLink href="#">Twitter</StyledLink>
          <StyledLink href="#">Instagram</StyledLink>
          <StyledLink href="#">Discord</StyledLink>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default PageFooter;
