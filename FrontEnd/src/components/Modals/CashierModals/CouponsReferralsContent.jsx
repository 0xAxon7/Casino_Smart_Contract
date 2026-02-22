import React from "react";
import { StyledCouponsContent } from "./styles";

const CouponsReferralsContent = ({ option }) => {
  return (
    <form>
      <StyledCouponsContent>
        <img
          src={
            option === "Coupons"
              ? "https://rollbit.com/static/media/coupon.5448383faf0dfbd2c111.png"
              : "https://rollbit.com/static/media/coin.c832c5bf7167a98755e1.webp"
          }
          size="153"
          className="css-1ges8if"
          style={{ margin: "24px 0px 32px" }}
          alt=""
        />
        <h1 className="title">
          {option === "Coupons" ? "Redeem Coupon Code" : "Apply referral code"}
        </h1>
        <div className="input-container">
          <input
            type="text"
            name="name"
            placeholder={
              option === "Coupons"
                ? "Enter Coupon Code..."
                : "Enter Referral Code..."
            }
            value=""
          />
        </div>
        <div className="info-text">
          {option === "Coupons"
            ? "We regularly post these on our"
            : 'Don\'t have a code? Enter "Rollbit"'}{" "}
          {option === "Coupons" && (
            <a
              href="https://twitter.com/rollbitcom"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          )}
        </div>
        <div id="recaptcha2069">
          <div
            className="grecaptcha-badge"
            data-style="bottomright"
            style={{
              width: "256px",
              height: "60px",
              position: "fixed",
              visibility: "hidden",
              display: "block",
              transition: "right 0.3s ease 0s",
              bottom: "14px",
              right: "-186px",
              boxShadow: "gray 0px 0px 5px",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            <div className="grecaptcha-logo">
              <iframe
                title="reCAPTCHA"
                width="256"
                height="60"
                role="presentation"
                name="a-c035ti8nb037"
                frameBorder="0"
                scrolling="no"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcLy4QaAAAAAJTsyzu-3Vy0vM7N1rs71trH38oG&amp;co=aHR0cHM6Ly9/rollbit.com:443."
              ></iframe>
            </div>
            <div className="grecaptcha-error"></div>
            <textarea
              id="g-recaptcha-response-100004"
              name="g-recaptcha-response"
              className="g-recaptcha-response"
              style={{
                width: "250px",
                height: "40px",
                border: "1px solid rgb(193, 193, 193)",
                margin: "10px 25px",
                padding: "0px",
                resize: "none",
                display: "none",
              }}
            ></textarea>
          </div>
          {/* <iframe style={{ display: "none" }}></iframe> */}
        </div>
        <button
          className="claim-button"
          type="submit"
          style={{ width: "140px", marginTop: "40px" }}
        >
          {option === "Coupons" ? "Claim" : "Apply"}
        </button>
      </StyledCouponsContent>
    </form>
  );
};

export default CouponsReferralsContent;
