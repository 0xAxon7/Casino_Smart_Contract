import React, { useState } from 'react';


//assets
import styled from 'styled-components';
import RLB from "../../../assets/images/Frame (60).svg";
import ERC from "../../../assets/images/Frame 160.svg";
import BTC from "../../../assets/images/IMAGE (1).svg";
import ETH from "../../../assets/images/IMAGE (2).svg";
import LTC from "../../../assets/images/IMAGE (3).svg";
import SOL from "../../../assets/images/IMAGE (4).svg";
import COIN from "../../../assets/images/IMAGE (5).svg";
import NFT from "../../../assets/images/svg.svg";
import ARROW from "../../../assets/modelImages/Frame (5).svg";







//overflow style
const StyledComponent = styled.div`


&::-webkit-scrollbar {
  width: 0.6rem;
}

&::-webkit-scrollbar-track {
  background: #1A1D29;
}

&::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background: rgba(203, 215, 255, 0.08);
}

`;




const WModel1 = () => {

    const [isCoin, setisCoin] = useState("");


    if (isCoin === "bitCoin") {
        return (
            <StyledComponent style={{ overflowY: "scroll", overflowX: "hidden", height: "25pc" }}>
                {/* title */}
                <div style={{ color: "#FFF", fontSize: "22px", textTransform: "uppercase", margin: "-10px 3.1pc" }}>

                    <p style={{ display: "flex", alignItems: "center", margin: "10px 0" }}><img onClick={() => setisCoin("")} src={ARROW} alt="arrow" style={{ width: "9px", height: "16px", marginTop: "3px", cursor: "pointer" }} />

                        <img src={BTC} alt="btc" style={{ width: "32px", height: "32px", marginLeft: "25px" }} />

                        <span style={{ margin: "0 6px", width: "225px" }}>Withdraw Bitcoin</span>
                        <p style={{ width: "422px", color: "#FFB018", textTransform: "none", fontSize: "14px", marginLeft: "10px", fontStyle: "normal", fontWeight: "400", }}>View Transactions</p>
                    </p>
                </div>


                {/* New div sec========================== */}


                <div style={{ width: "725px", height: "440px", margin: "0px 40px", marginTop: "40px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>
                    <div>
                        <div>
                            <p style={{ width: "720px", color: "#B1B6C6", padding: "15px 25px", fontSize: "14px", fontStyle: "normal", fontWeight: "400" }}>Please enter the Bitcoin wallet address you wish to receive the funds on. Once confirmed, the withdrawal is usually processed within a few minutes.</p>
                        </div>


                        {/* input sec================ */}

                        <div>
                            <div>
                                <p style={{ width: "270px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", textTransform: "uppercase", display: "flex", gap: "5px", padding: "10px 25px" }}>Receiving Bitcoin address <span style={{ color: "#FF4949", fontSize: "12px" }}>*</span></p>
                            </div>


                            <div>
                                <input type="text" style={{ width: "675px", height: "58px", margin: "5px 25px", borderRadius: "6px", background: "rgba(15, 17, 26, 0.55)", padding: "0 10px", color: "#fff" }} />
                            </div>

                            {/* NEW sec================ */}

                            <div>
                                <p style={{ width: "270px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", textTransform: "uppercase", display: "flex", gap: "5px", padding: "20px 25px" }}>Withdrawal amount <span style={{ color: "#FF4949", fontSize: "12px" }}>*</span></p>
                            </div>

                            {/* input section */}
                            <div style={{ display: "flex", }}>
                                <div style={{ display: "flex", width: "230px", color: "#fff", flexDirection: "column", alignItems: "flex-start", margin: "20px 20px", borderRadius: "6px", background: "rgba(15, 17, 26, 0.55)", }}>
                                    <div style={{ display: "flex", width: "280px", justifyContent: "space-between" }}>
                                        <img src={COIN} alt="coin" style={{ marginLeft: "10px" }} />
                                        <input type="text" style={{ background: "transparent", width: "15pc", height: "3.7pc", outline: "none" }} />

                                    </div>

                                </div>

                                <p style={{ color: "#fff", fontSize: "18px", marginTop: "35px" }}>=</p>



                                <div style={{ display: "flex", width: "230px", color: "#fff", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", margin: "20px 20px", borderRadius: "6px", background: "rgba(15, 17, 26, 0.55)", }}>
                                    <div style={{ display: "flex", width: "280px", justifyContent: "space-between", alignItems: "center" }}>
                                        <img src={BTC} alt="coin" style={{ marginLeft: "10px", height: "20px" }} />
                                        <input type="text" style={{ background: "transparent", width: "15pc", height: "2.7pc", outline: "none", marginLeft: '10px' }} />
                                        <div style={{ display: "inline-flex", padding: "18px 30px", margin: "-5px 2pc", height: "55px", borderRadius: "8px", background: "#86F454", boxShadow: "0px 0px 10px 0px rgba(118, 255, 25, 0.40)", textAlign: "center", textTransform: "uppercase" }}>

                                            <p style={{ textTransform: "uppercase", marginTop: "-13px", fontWeight: "400", fontSize: "14px", fontStyle: "normal", color: "#141722" }}>Request <br /> withdrawal</p>
                                        </div>
                                    </div>

                                </div>






                            </div>











                            <div>
                                <div>
                                    <p style={{ width: "110px", display: "flex", gap: "10px", margin: "15px 25px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", fontWeight: "400" }}>Network Fee: <span>$1.13</span></p>
                                </div>

                                <div style={{ margin: "0 25px" }}>
                                    <p style={{ width: "525px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", fontWeight: "400" }}>*You will receive the specified Bitcoin amount to your withdrawal address</p>


                                    <p style={{ width: "585px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", fontWeight: "400" }}>*The value subtracted from your balance may vary between now and the time we process your withdrawal</p>
                                </div>
                            </div>




                        </div>



                    </div>
                </div>



            </StyledComponent>
        )
    }

    if (isCoin === "ethereum") {

        return (
            <StyledComponent style={{ overflowY: "scroll", overflowX: "hidden", height: "24.5pc" }}>

                {/* title */}
                <div style={{ color: "#FFF", fontSize: "22px", textTransform: "uppercase", margin: "-10px 3.1pc" }}>

                    <p style={{ display: "flex", alignItems: "center", margin: "10px 0" }}><img onClick={() => setisCoin("")} src={ARROW} alt="arrow" style={{ width: "9px", height: "16px", marginTop: "3px", cursor: "pointer" }} />

                        <img src={ETH} alt="eth" style={{ width: "32px", height: "32px", marginLeft: "25px" }} />

                        <span style={{ margin: "0 6px", width: "285px" }}>Withdraw ETHereum</span>
                        <p style={{ width: "422px", color: "#FFB018", textTransform: "none", fontSize: "14px", marginLeft: "10px", fontStyle: "normal", fontWeight: "400", }}>View Transactions</p>
                    </p>
                </div>


                {/* New div sec========================== */}


                <div style={{ width: "725px", height: "440px", margin: "0px 40px", marginTop: "40px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>
                    <div>
                        <div>
                            <p style={{ width: "720px", color: "#B1B6C6", padding: "15px 25px", fontSize: "14px", fontStyle: "normal", fontWeight: "400" }}>Please enter the Ethereum wallet address you wish to receive the funds on. Once confirmed, the withdrawal is usually processed within a few minutes.</p>
                        </div>


                        {/* input sec================ */}

                        <div>
                            <div>
                                <p style={{ width: "270px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", textTransform: "uppercase", display: "flex", gap: "5px", padding: "10px 25px" }}>Receiving Ethereum address <span style={{ color: "#FF4949", fontSize: "12px" }}>*</span></p>
                            </div>


                            <div>
                                <input type="text" style={{ width: "675px", height: "58px", margin: "5px 25px", borderRadius: "6px", background: "rgba(15, 17, 26, 0.55)", padding: "0 10px", color: "#fff" }} />
                            </div>

                            {/* NEW sec================ */}

                            <div>
                                <p style={{ width: "270px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", textTransform: "uppercase", display: "flex", gap: "5px", padding: "20px 25px" }}>Withdrawal amount <span style={{ color: "#FF4949", fontSize: "12px" }}>*</span></p>
                            </div>


                            <div style={{ display: "flex", }}>
                                <div style={{ display: "flex", width: "230px", color: "#fff", flexDirection: "column", alignItems: "flex-start", margin: "20px 20px", borderRadius: "6px", background: "rgba(15, 17, 26, 0.55)", }}>
                                    <div style={{ display: "flex", width: "280px", justifyContent: "space-between" }}>
                                        <img src={COIN} alt="coin" style={{ marginLeft: "10px" }} />
                                        <input type="text" style={{ background: "transparent", width: "15pc", height: "3.7pc", outline: "none" }} />

                                    </div>

                                </div>

                                <p style={{ color: "#fff", fontSize: "18px", marginTop: "35px" }}>=</p>



                                <div style={{ display: "flex", width: "230px", color: "#fff", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", margin: "20px 20px", borderRadius: "6px", background: "rgba(15, 17, 26, 0.55)", }}>
                                    <div style={{ display: "flex", width: "280px", justifyContent: "space-between", alignItems: "center" }}>
                                        <img src={ETH} alt="coin" style={{ marginLeft: "10px", height: "20px" }} />
                                        <input type="text" style={{ background: "transparent", width: "15pc", height: "2.7pc", outline: "none", marginLeft: '10px' }} />
                                        <div style={{ display: "inline-flex", padding: "18px 30px", margin: "-5px 2pc", height: "55px", borderRadius: "8px", background: "#86F454", boxShadow: "0px 0px 10px 0px rgba(118, 255, 25, 0.40)", textAlign: "center", textTransform: "uppercase" }}>

                                            <p style={{ textTransform: "uppercase", marginTop: "-13px", fontWeight: "400", fontSize: "14px", fontStyle: "normal", color: "#141722" }}>Request <br /> withdrawal</p>
                                        </div>
                                    </div>

                                </div>






                            </div>


















                            <div>
                                <div>
                                    <p style={{ width: "110px", display: "flex", gap: "10px", margin: "15px 25px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", fontWeight: "400" }}>Network Fee: <span>$1.45</span></p>
                                </div>

                                <div style={{ margin: "0 25px" }}>
                                    <p style={{ width: "525px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", fontWeight: "400" }}>*You will receive the specified Ethereum amount to your withdrawal address</p>


                                    <p style={{ width: "585px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", fontWeight: "400" }}>*The value subtracted from your balance may vary between now and the time we process your withdrawal</p>
                                </div>
                            </div>




                        </div>



                    </div>
                </div>



            </StyledComponent>
        )

    }
    if (isCoin === "latecoin") {

        return (
            <StyledComponent style={{ overflowY: "scroll", overflowX: "hidden", height: "24.5pc" }}>
                {/* title */}
                <div style={{ color: "#FFF", fontSize: "22px", textTransform: "uppercase", margin: "-10px 3.1pc" }}>

                    <p style={{ display: "flex", alignItems: "center", margin: "10px 0" }}><img onClick={() => setisCoin("")} src={ARROW} alt="arrow" style={{ width: "9px", height: "16px", marginTop: "3px", cursor: "pointer" }} />

                        <img src={LTC} alt="ltc" style={{ width: "32px", height: "32px", marginLeft: "25px" }} />

                        <span style={{ margin: "0 6px", width: "285px" }}>Withdraw Litecoin</span>
                        <p style={{ width: "422px", color: "#FFB018", textTransform: "none", fontSize: "14px", marginLeft: "10px", fontStyle: "normal", fontWeight: "400", }}>View Transactions</p>
                    </p>
                </div>


                {/* New div sec========================== */}


                <div style={{ width: "725px", height: "440px", margin: "0px 40px", marginTop: "40px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>
                    <div>
                        <div>
                            <p style={{ width: "720px", color: "#B1B6C6", padding: "15px 25px", fontSize: "14px", fontStyle: "normal", fontWeight: "400" }}>Please enter the Litecoin wallet address you wish to receive the funds on. Once confirmed, the withdrawal is usually processed within a few minutes.</p>
                        </div>


                        {/* input sec================ */}

                        <div>
                            <div>
                                <p style={{ width: "270px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", textTransform: "uppercase", display: "flex", gap: "5px", padding: "10px 25px" }}>Receiving Litecoin address <span style={{ color: "#FF4949", fontSize: "12px" }}>*</span></p>
                            </div>


                            <div>
                                <input type="text" style={{ width: "675px", height: "58px", margin: "5px 25px", padding: "0 10px", color: "#fff", borderRadius: "6px", background: "rgba(15, 17, 26, 0.55)" }} />
                            </div>

                            {/* NEW sec================ */}

                            <div>
                                <p style={{ width: "270px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", textTransform: "uppercase", display: "flex", gap: "5px", padding: "20px 25px" }}>Withdrawal amount <span style={{ color: "#FF4949", fontSize: "12px" }}>*</span></p>
                            </div>


                            <div style={{ display: "flex", }}>
                                <div style={{ display: "flex", width: "230px", color: "#fff", flexDirection: "column", alignItems: "flex-start", margin: "20px 20px", borderRadius: "6px", background: "rgba(15, 17, 26, 0.55)", }}>
                                    <div style={{ display: "flex", width: "280px", justifyContent: "space-between" }}>
                                        <img src={COIN} alt="coin" style={{ marginLeft: "10px" }} />
                                        <input type="text" style={{ background: "transparent", width: "15pc", height: "3.7pc", outline: "none" }} />

                                    </div>

                                </div>

                                <p style={{ color: "#fff", fontSize: "18px", marginTop: "35px" }}>=</p>



                                <div style={{ display: "flex", width: "230px", color: "#fff", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", margin: "20px 20px", borderRadius: "6px", background: "rgba(15, 17, 26, 0.55)", }}>
                                    <div style={{ display: "flex", width: "280px", justifyContent: "space-between", alignItems: "center" }}>
                                        <img src={LTC} alt="coin" style={{ marginLeft: "10px", height: "20px" }} />
                                        <input type="text" style={{ background: "transparent", width: "15pc", height: "2.7pc", outline: "none", marginLeft: '10px' }} />
                                        <div style={{ display: "inline-flex", padding: "18px 30px", margin: "-5px 2pc", height: "55px", borderRadius: "8px", background: "#86F454", boxShadow: "0px 0px 10px 0px rgba(118, 255, 25, 0.40)", textAlign: "center", textTransform: "uppercase" }}>

                                            <p style={{ textTransform: "uppercase", marginTop: "-13px", fontWeight: "400", fontSize: "14px", fontStyle: "normal", color: "#141722" }}>Request <br /> withdrawal</p>
                                        </div>
                                    </div>

                                </div>






                            </div>



                            <div>
                                <div>
                                    <p style={{ width: "110px", display: "flex", gap: "10px", margin: "15px 25px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", fontWeight: "400" }}>Network Fee: <span>$1.45</span></p>
                                </div>

                                <div style={{ margin: "0 25px" }}>
                                    <p style={{ width: "525px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", fontWeight: "400" }}>*You will receive the specified Litecoin amount to your withdrawal address</p>


                                    <p style={{ width: "585px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", fontWeight: "400" }}>*The value subtracted from your balance may vary between now and the time we process your withdrawal</p>
                                </div>
                            </div>




                        </div>



                    </div>
                </div>


            </StyledComponent>

        )

    }
    if (isCoin === "solana") {

        return (
            <StyledComponent style={{ overflowY: "scroll", overflowX: "hidden", height: "24.5pc" }}>

                {/* title */}
                <div style={{ color: "#FFF", fontSize: "22px", textTransform: "uppercase", margin: "-10px 3.1pc" }}>

                    <p style={{ display: "flex", alignItems: "center", margin: "10px 0" }}><img onClick={() => setisCoin("")} src={ARROW} alt="arrow" style={{ width: "9px", height: "16px", marginTop: "3px", cursor: 'pointer' }} />

                        <img src={SOL} alt="sol" style={{ width: "32px", height: "32px", marginLeft: "25px" }} />

                        <span style={{ margin: "0 6px", width: "285px" }}>Withdraw Solana</span>
                        <p style={{ width: "422px", color: "#FFB018", textTransform: "none", fontSize: "14px", marginLeft: "-55px", fontStyle: "normal", fontWeight: "400", }}>View Transactions</p>
                    </p>
                </div>


                {/* New div sec========================== */}


                <div style={{ width: "725px", height: "440px", margin: "0px 40px", marginTop: "40px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>
                    <div>
                        <div>
                            <p style={{ width: "720px", color: "#B1B6C6", padding: "15px 25px", fontSize: "14px", fontStyle: "normal", fontWeight: "400" }}>Please enter the Solana wallet address you wish to receive the funds on. Once confirmed, the withdrawal is usually processed within a few minutes.</p>
                        </div>


                        {/* input sec================ */}

                        <div>
                            <div>
                                <p style={{ width: "270px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", textTransform: "uppercase", display: "flex", gap: "5px", padding: "10px 25px" }}>Receiving Solana address <span style={{ color: "#FF4949", fontSize: "12px" }}>*</span></p>
                            </div>


                            <div>
                                <input type="text" style={{ width: "675px", height: "58px", margin: "5px 25px", padding: "0 10px", color: "#fff", borderRadius: "6px", background: "rgba(15, 17, 26, 0.55)" }} />
                            </div>

                            {/* NEW sec================ */}

                            <div>
                                <p style={{ width: "270px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", textTransform: "uppercase", display: "flex", gap: "5px", padding: "20px 25px" }}>Withdrawal amount <span style={{ color: "#FF4949", fontSize: "12px" }}>*</span></p>
                            </div>


                            <div style={{ display: "flex", }}>
                                <div style={{ display: "flex", width: "230px", color: "#fff", flexDirection: "column", alignItems: "flex-start", margin: "20px 20px", borderRadius: "6px", background: "rgba(15, 17, 26, 0.55)", }}>
                                    <div style={{ display: "flex", width: "280px", justifyContent: "space-between" }}>
                                        <img src={COIN} alt="coin" style={{ marginLeft: "10px" }} />
                                        <input type="text" style={{ background: "transparent", width: "15pc", height: "3.7pc", outline: "none" }} />

                                    </div>

                                </div>

                                <p style={{ color: "#fff", fontSize: "18px", marginTop: "35px" }}>=</p>



                                <div style={{ display: "flex", width: "230px", color: "#fff", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", margin: "20px 20px", borderRadius: "6px", background: "rgba(15, 17, 26, 0.55)", }}>
                                    <div style={{ display: "flex", width: "280px", justifyContent: "space-between", alignItems: "center" }}>
                                        <img src={SOL} alt="coin" style={{ marginLeft: "10px", height: "20px" }} />
                                        <input type="text" style={{ background: "transparent", width: "15pc", height: "2.7pc", outline: "none", marginLeft: '10px' }} />
                                        <div style={{ display: "inline-flex", padding: "18px 30px", margin: "-5px 2pc", height: "55px", borderRadius: "8px", background: "#86F454", boxShadow: "0px 0px 10px 0px rgba(118, 255, 25, 0.40)", textAlign: "center", textTransform: "uppercase" }}>

                                            <p style={{ textTransform: "uppercase", marginTop: "-13px", fontWeight: "400", fontSize: "14px", fontStyle: "normal", color: "#141722" }}>Request <br /> withdrawal</p>
                                        </div>
                                    </div>

                                </div>






                            </div>



                            <div>
                                <div>
                                    <p style={{ width: "110px", display: "flex", gap: "10px", margin: "15px 25px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", fontWeight: "400" }}>Network Fee: <span>$1.45</span></p>
                                </div>

                                <div style={{ margin: "0 25px" }}>
                                    <p style={{ width: "525px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", fontWeight: "400" }}>*You will receive the specified Solana amount to your withdrawal address</p>


                                    <p style={{ width: "585px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", fontWeight: "400" }}>*The value subtracted from your balance may vary between now and the time we process your withdrawal</p>
                                </div>
                            </div>




                        </div>



                    </div>
                </div>
            </StyledComponent>
        )

    }





    return (

        <div>



            <div>
                <div><p style={{ color: "#FFF", width: "269px", margin: "0 35px", textTransform: "uppercase", fontSize: "22px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>Withdraw options</p>
                </div>
            </div>

            {/* icons sec=============== */}


            <div>

                <div style={{ display: "flex", marginTop: "15px" }}>

                    <div onClick={() => setisCoin("bitCoin")} style={{ display: "inline-flex", padding: "45px 0px", margin: "20px 35px", flexDirection: "column", alignItems: "center", gap: "26 px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)", cursor: "pointer" }}>

                        <img src={BTC} alt="btc" style={{ marginTop: "-20px" }} />
                        <p style={{ color: "#B1B6C6", textAlign: "center", width: "106px", margin: "0px 35px", marginTop: "24px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>Bitcoin (BTC)</p>
                    </div>

                    <div onClick={() => setisCoin("ethereum")} style={{ display: "inline-flex", padding: "45px 0px", margin: "20px -22px", flexDirection: "column", alignItems: "center", gap: "26px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)", cursor: "pointer" }}>

                        <img src={ETH} alt="eth" style={{ marginTop: "-20px" }} />
                        <p style={{ color: "#B1B6C6", textAlign: "center", width: "106px", margin: "0 35px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>Ethereum (ETH)</p>
                    </div>

                    <div onClick={() => setisCoin("latecoin")} style={{ display: "inline-flex", padding: "45px 0px", margin: "20px 35px", flexDirection: "column", alignItems: "center", gap: "26px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)", cursor: "pointer" }}>

                        <img src={LTC} alt="ltc" style={{ marginTop: "-20px" }} />
                        <p style={{ color: "#B1B6C6", textAlign: "center", width: "106px", margin: "0 35px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>Litecoin (LTC)</p>
                    </div>


                    <div onClick={() => setisCoin("solana")} style={{ display: "inline-flex", padding: "45px 0px", margin: "20px -22px", flexDirection: "column", alignItems: "center", gap: "26px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)", cursor: "pointer" }}>

                        <img src={SOL} alt="sol" style={{ marginTop: "-20px" }} />
                        <p style={{ color: "#B1B6C6", textAlign: "center", width: "106px", margin: "0 35px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>Solana (SOL)</p>
                    </div>
                </div>


                {/* next div=====================================================
    ================================================================= */}


                <div style={{ display: "flex", margin: "-20px 0" }}>

                    <div style={{ display: "inline-flex", margin: "30px 35px", flexDirection: "column", alignItems: "center", gap: "26 px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

                        <img src={RLB} alt="rlb" style={{ marginTop: "25px" }} />
                        <p style={{ color: "#B1B6C6", textAlign: "center", width: "108px", margin: "35px 35px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>Rollbit Coin (RLB)</p>
                    </div>

                    <div style={{ display: "inline-flex", margin: "30px -22px", flexDirection: "column", alignItems: "center", gap: "26px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

                        <img src={ERC} alt="erc" style={{ marginTop: "15px" }} />
                        <p style={{ color: "#B1B6C6", textAlign: "center", width: "106px", margin: "0 35px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>ERC-20 </p>
                        <span style={{ color: "#B1B6C6", textAlign: "center", marginTop: "-24px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>(UsDx, APE, and more)</span>
                    </div>

                    <div style={{ display: "inline-flex", margin: "30px 35px", flexDirection: "column", alignItems: "center", gap: "26px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

                        <img src={NFT} alt="nft" style={{ marginTop: "15px", width: "68px", height: "68px" }} />
                        <p style={{ color: "#B1B6C6", textAlign: "center", width: "106px", margin: "0 35px", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>NFT</p>
                    </div>

                </div>







            </div>
        </div>

    )
}

export default WModel1;