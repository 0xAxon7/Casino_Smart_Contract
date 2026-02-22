import React from "react";

import { StyledBitcoinContent } from "./styles";

const LitecoinContent = ({ handleBack }) => {
  return (
    <StyledBitcoinContent>
      <h1 class="title-actions">
        <div class="back-button" onClick={handleBack}>
          <svg viewBox="0 0 8 14" size="9" color="#fff" class="css-181vsso">
            <title>arrow</title>
            <g id="arrow" fill-rule="currentColor">
              <path
                d="M8,12.534 C8.00312077,12.1491981 7.86017338,11.7775349 7.6,11.494 L3.348,7 L7.6,2.506 C8.14019021,1.91980519 8.14019021,1.01719481 7.6,0.431 C7.34808121,0.156127315 6.99235127,-0.000378973093 6.6195,-0.000378973093 C6.24664873,-0.000378973093 5.89091879,0.156127315 5.639,0.431 L0.407,5.963 C-0.135688789,6.54706274 -0.135688789,7.45093726 0.407,8.035 L5.634,13.569 C5.88591879,13.8438727 6.24164873,14.000379 6.6145,14.000379 C6.98735127,14.000379 7.34308121,13.8438727 7.595,13.569 C7.8548547,13.2872672 7.99785194,12.9172619 7.995,12.534"
                id="Arrow-left-1"
              ></path>
            </g>
          </svg>
        </div>
        <img
          src="https://s2.coinmarketcap.com/static/img/coins/64x64/2.png"
          size="32"
          class="coin-img"
          alt=""
        />
        Deposit Litecoin<div class="underline-text">View Transactions</div>
      </h1>

      <div class="qr-code-container">
        <div class="flex">
          <div>
            <div class="info-text">
              Send the amount of Litecoin of your choice to the following
              address to receive the equivalent in Coins.
            </div>
            <div class="warning-text">
              <svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                size="20"
                color="#ffe500"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.7013 1.19853C11.3182 0.522528 10.3443 0.522527 9.96124 1.19853L0.962978 17.0785C0.585235 17.7451 1.06679 18.5715 1.83301 18.5715H19.8295C20.5957 18.5715 21.0773 17.7451 20.6996 17.0785L11.7013 1.19853ZM11.5541 12.1603C11.777 12.1603 11.8456 12.0574 11.8627 11.8345L12.017 6.92026C12.017 6.68026 11.9484 6.5774 11.7084 6.5774H9.97127C9.73127 6.5774 9.64555 6.68026 9.64555 6.92026L9.81698 11.8345C9.83413 12.0574 9.9027 12.1603 10.1256 12.1603H11.5541ZM11.7084 15.806C11.9313 15.806 12.017 15.7203 12.017 15.4803V13.646C12.017 13.4231 11.9313 13.3203 11.7084 13.3203H9.97127C9.73127 13.3203 9.64555 13.4231 9.64555 13.646V15.4803C9.64555 15.7203 9.73127 15.806 9.97127 15.806H11.7084Z"
                  fill="currentColor"
                ></path>
              </svg>
              Only deposit over the LTC network. Do not use BNB or BSC networks
            </div>
          </div>
          <img
            class="qr-code"
            src="data:image/png;base64,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"
            alt="qrcode"
          />
        </div>
        <label
          class="label"
          style={{ color: "rgb(255, 255, 255)", margin: "16px 0px 12px" }}
        >
          Your personal LITECOIN deposit address
        </label>
        <div class="address-container">
          <div style={{ margin: "0px 12px 0px 8px" }}>
            3A4vRCzguS7ewTUwqQz1Qjp4HPfzKehWZ2
          </div>
          <button class="copy-button">Copy Address</button>
        </div>
      </div>

      <div class="exchange-rate-container">
        <div class="inputs-container">
          <div class="input">
            <img
              src="https://rollbit.com/static/media/coin.c832c5bf7167a98755e1.webp"
              size="20"
              style={{ marginRight: "10px", marginBottom: "-2px" }}
              alt=""
            />
            <div class="dollar-sign" style={{ fontSize: "14px" }}>
              $
            </div>
            <input type="text" value="0" />
          </div>
          <div class="equal-sign">=</div>
          <div class="input">
            <img
              src="https://s2.coinmarketcap.com/static/img/coins/64x64/2.png"
              size="20"
              style={{ marginRight: "10px" }}
              alt=""
            />
            <input type="text" value="" />
          </div>
        </div>
        {/* <div class="css-p4d75u">Insufficient amount to cover deposit fee</div> */}
        <div
          class="info-text"
          style={{
            fontSize: "12px",
            margin: "16px 0px 0px",
            textAlign: "center",
          }}
        >
          The value of LTC may change between now and the time we receive your
          payment
        </div>
      </div>

      <div class="buy-crypto-container">
        <span>Don't have any Litecoin?</span>
        <button class="buy-button">Buy Crypto</button>
        <div class="payment-methods">
          <svg
            height="26"
            viewBox="0 0 79 26"
            width="79"
            xmlns="http://www.w3.org/2000/svg"
            size="47"
            class="css-7c4ibv"
          >
            <g fill="none" fill-rule="evenodd">
              <g fill="#1767ee">
                <path d="m34.2402205 24.7391863h-6.3714503l3.9851615-23.99780858h6.3711019z"></path>
                <path d="m57.3372941 1.32805567c-1.25673-.48556168-3.2500076-1.02168149-5.7146896-1.02168149-6.2920118 0-10.7227951 3.26761632-10.7499714 7.93932363-.0522622 3.44677539 3.1723112 5.36119809 5.5840342 6.51046259 2.4650304 1.1743738 3.3029666 1.9408894 3.3029666 2.9876803-.0250859 1.6076808-1.991884 2.3487477-3.8262847 2.3487477-2.543772 0-3.9067683-.3820702-5.9780907-1.2765081l-.8389814-.3834274-.8915919 5.3869861c1.4943485.6630241 4.2475174 1.2513987 7.1059075 1.2771867 6.6853715 0 11.0377616-3.2170582 11.0893269-8.1955075.0254342-2.7318358-1.677266-4.8250783-5.3481579-6.5355719-2.2284572-1.09802768-3.5931956-1.83841593-3.5931956-2.96189232.0261311-1.02134217 1.1542963-2.06745443 3.6698467-2.06745443 2.0713224-.05123677 3.5931956.43364627 4.7460982.91886864l.576277.25482656z"></path>
                <path
                  d="m65.8055011 16.2376155c.5247117-1.3786423 2.543772-6.71439168 2.543772-6.71439168-.0264795.05123676.5236665-1.404091.8382845-2.29751091l.4452734 2.06779375s1.2065583 5.74428624 1.4685658 6.94410884c-.9957678 0-4.0374237 0-5.2958957 0zm7.8647535-15.49623778h-4.9283187c-1.5197827 0-2.6744274.43364628-3.3301429 1.99110826l-9.4639747 22.00636102h6.6853715s1.1006405-2.9618923 1.3372137-3.5998071h8.1804168c.1829175.8425225.7602398 3.5998071.7602398 3.5998071h5.8993491z"
                  fill-rule="nonzero"
                ></path>
                <path d="m22.5470918.74137772-6.2397498 16.36420898-.6818465-3.3188531c-1.1535994-3.82952419-4.7715324-7.9902211-8.80895606-10.0590328l5.71538636 20.9860367h6.7376337l10.0148175-23.97235978z"></path>
              </g>
              <path
                d="m10.513214.74137772h-10.25104234l-.10487267.48488305c7.99645412 1.99144757 13.29234981 6.79175578 15.46819651 12.56149073l-2.2284572-11.02913816c-.3668802-1.53269189-1.4943485-1.96667748-2.8838243-2.01723562z"
                fill="#ec982d"
              ></path>
            </g>
          </svg>
          <svg
            height="45"
            viewBox="0 0 68 45"
            width="68"
            xmlns="http://www.w3.org/2000/svg"
            size="33"
            class="css-18wrt4l"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                d="m0 0h67.68576v44.149197h-67.68576z"
                fill="#fff"
                opacity="0"
              ></path>
              <path
                d="m24.91788 7.691816h17.855152v28.760484h-17.855152z"
                fill="#ff5f00"
              ></path>
              <path
                d="m26.7569704 22.0745983c-.0044831-5.6113672 2.6074955-10.9131435 7.0833336-14.37770153-7.6037446-5.89330719-18.5230268-5.03489604-25.08406848 1.97196517-6.5610417 7.00686126-6.5610417 17.80969196 0 24.81655326 6.56104168 7.0068612 17.48032388 7.8652723 25.08406848 1.9719651-4.4772624-3.4656582-7.0894007-8.7696319-7.0833336-14.382782z"
                fill="#eb001b"
              ></path>
              <g fill="#f79e1b">
                <path
                  d="m62.1113048 34.1402643v-1.1951516h.2833333v-.2472727h-.6743333v.2472727h.2663333v1.1951516zm1.309 0v-1.4424243h-.204l-.238 1.0303031-.238-1.0303031h-.204v1.4424243h.1473333v-1.0921213l.221.9375758h.153l.221-.9375758v1.0921213z"
                  fill-rule="nonzero"
                ></path>
                <path d="m63.8478806 22.0745983c0 7.0025912-4.0545409 13.3903906-10.4412173 16.4504753s-13.9843887 2.2552166-19.5663593-2.0727737c4.4738851-3.4674994 7.0860604-8.7685708 7.0860604-14.3802418s-2.6121753-10.9127425-7.0860604-14.38024179c5.5819706-4.32799037 13.1796829-5.13285847 19.5663593-2.07277373 6.3866764 3.06008473 10.4412173 9.44788412 10.4412173 16.45047532z"></path>
              </g>
            </g>
          </svg>
          <svg
            viewBox="0 0 512 210.2"
            xmlns="http://www.w3.org/2000/svg"
            size="48"
            class="css-sraeil"
          >
            <path d="m93.6 27.1c-6 7.1-15.6 12.7-25.2 11.9-1.2-9.6 3.5-19.8 9-26.1 6-7.3 16.5-12.5 25-12.9 1 10-2.9 19.8-8.8 27.1m8.7 13.8c-13.9-.8-25.8 7.9-32.4 7.9-6.7 0-16.8-7.5-27.8-7.3-14.3.2-27.6 8.3-34.9 21.2-15 25.8-3.9 64 10.6 85 7.1 10.4 15.6 21.8 26.8 21.4 10.6-.4 14.8-6.9 27.6-6.9 12.9 0 16.6 6.9 27.8 6.7 11.6-.2 18.9-10.4 26-20.8 8.1-11.8 11.4-23.3 11.6-23.9-.2-.2-22.4-8.7-22.6-34.3-.2-21.4 17.5-31.6 18.3-32.2-10-14.8-25.6-16.4-31-16.8m80.3-29v155.9h24.2v-53.3h33.5c30.6 0 52.1-21 52.1-51.4s-21.1-51.2-51.3-51.2zm24.2 20.4h27.9c21 0 33 11.2 33 30.9s-12 31-33.1 31h-27.8zm129.8 136.7c15.2 0 29.3-7.7 35.7-19.9h.5v18.7h22.4v-77.6c0-22.5-18-37-45.7-37-25.7 0-44.7 14.7-45.4 34.9h21.8c1.8-9.6 10.7-15.9 22.9-15.9 14.8 0 23.1 6.9 23.1 19.6v8.6l-30.2 1.8c-28.1 1.7-43.3 13.2-43.3 33.2 0 20.2 15.7 33.6 38.2 33.6zm6.5-18.5c-12.9 0-21.1-6.2-21.1-15.7 0-9.8 7.9-15.5 23-16.4l26.9-1.7v8.8c0 14.6-12.4 25-28.8 25zm82 59.7c23.6 0 34.7-9 44.4-36.3l42.5-119.2h-24.6l-28.5 92.1h-.5l-28.5-92.1h-25.3l41 113.5-2.2 6.9c-3.7 11.7-9.7 16.2-20.4 16.2-1.9 0-5.6-.2-7.1-.4v18.7c1.4.4 7.4.6 9.2.6z"></path>
          </svg>
          <svg
            fill="#fff"
            viewBox="0 0 435.97 173.13"
            xmlns="http://www.w3.org/2000/svg"
            size="51"
            class="css-1j51kmf"
          >
            <g fill="#fff">
              <path d="m206.2 84.58v50.75h-16.1v-125.33h42.7a38.61 38.61 0 0 1 27.65 10.85 34.88 34.88 0 0 1 11.55 26.45 34.72 34.72 0 0 1 -11.55 26.6q-11.2 10.68-27.65 10.67h-26.6zm0-59.15v43.75h27a21.28 21.28 0 0 0 15.93-6.48 21.36 21.36 0 0 0 0-30.63 21 21 0 0 0 -15.93-6.65h-27z"></path>
              <path d="m309.1 46.78q17.85 0 28.18 9.54t10.32 26.16v52.85h-15.4v-11.9h-.7q-10 14.7-26.6 14.7-14.17 0-23.71-8.4a26.82 26.82 0 0 1 -9.54-21q0-13.31 10.06-21.17t26.86-7.88q14.34 0 23.62 5.25v-3.68a18.33 18.33 0 0 0 -6.65-14.25 22.8 22.8 0 0 0 -15.54-5.87q-13.49 0-21.35 11.38l-14.18-8.93q11.7-16.8 34.63-16.8zm-20.83 62.3a12.86 12.86 0 0 0 5.34 10.5 19.64 19.64 0 0 0 12.51 4.2 25.67 25.67 0 0 0 18.11-7.52q8-7.53 8-17.67-7.53-6-21-6-9.81 0-16.36 4.73c-4.41 3.2-6.6 7.09-6.6 11.76z"></path>
              <path d="m436 49.58-53.76 123.55h-16.62l19.95-43.23-35.35-80.32h17.5l25.55 61.6h.35l24.85-61.6z"></path>
            </g>
            <path
              d="m141.14 73.64a85.79 85.79 0 0 0 -1.24-14.64h-67.9v27.73h38.89a33.33 33.33 0 0 1 -14.38 21.88v18h23.21c13.59-12.53 21.42-31.06 21.42-52.97z"
              fill="#4285f4"
            ></path>
            <path
              d="m72 144c19.43 0 35.79-6.38 47.72-17.38l-23.21-18c-6.46 4.38-14.78 6.88-24.51 6.88-18.78 0-34.72-12.66-40.42-29.72h-23.91v18.55a72 72 0 0 0 64.33 39.67z"
              fill="#34a853"
            ></path>
            <path
              d="m31.58 85.78a43.14 43.14 0 0 1 0-27.56v-18.55h-23.91a72 72 0 0 0 0 64.66z"
              fill="#fbbc04"
            ></path>
            <path
              d="m72 28.5a39.09 39.09 0 0 1 27.62 10.8l20.55-20.55a69.18 69.18 0 0 0 -48.17-18.75 72 72 0 0 0 -64.33 39.67l23.91 18.55c5.7-17.06 21.64-29.72 40.42-29.72z"
              fill="#ea4335"
            ></path>
          </svg>
        </div>
      </div>
    </StyledBitcoinContent>
  );
};

export default LitecoinContent;
