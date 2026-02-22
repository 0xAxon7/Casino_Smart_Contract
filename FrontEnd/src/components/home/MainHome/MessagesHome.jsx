import React from 'react';

//assets 
import MSG from "../../../assets/images/Frame (31).svg";
import SWITCH from "../../../assets/images/Frame (32).svg";
import ARROW_DOWN from "../../../assets/images/Frame (33).svg";
import COLLAPSE from "../../../assets/images/Frame (34).svg";
import CROSS from "../../../assets/images/Frame (35).svg";
import EMOJI from "../../../assets/images/IMAGE (43).png";
import SETTINGS from "../../../assets/images/Frame (36).svg";

const MessagesHome = () => {
  return (  

    <div style={{ position: "fixed", left: "89.6pc", top: "4.0pc", background: "#1F2330", width: "16.5pc", height: "750px"}}>

        <div>

          <div style={{ padding: "7px 10px", display: 'inline-flex', alignItems: "center", gap: "6px", background: "rgba(203, 215, 255, 0.03)", borderRadius: "6px", margin: "10px 10px"}}>
              <img src={MSG} alt="Chat"  style={{ height: "12px", width: "11px" }}/>
              <p style={{ width: "30px", color: "#FFFFC1", fontSize: "12px", fontStyle: "normal", fontWeight: "400", lineHeight: "14.4px", textTransform: "uppercase" }}>Chat</p>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", }}>
            <img src={SWITCH} alt="switch" style={{ width: "9px", height: "14px" }}/>
            <p style={{ width: "46px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", fontWeight: "400", lineHeight: "14.4px", textTransform: "uppercase" }}>Trades</p>
            <img src={ARROW_DOWN} alt="arrow" style={{ width: "7px", height: "5px" }}/>

            
          <div style={{ display: "flex", gap: "4px", marginLeft: "2.5pc" }}>
            <img src={COLLAPSE} alt="collapse" style={{ width: "22px", height: "22px", flexShrink: "0" }}/>
            <img src={CROSS} alt="cross" style={{ width: "22px", height: "22px", flexShrink: "0" }}/>
          </div>

          </div>

          {/* image part */}
          <div style={{ display: "inline-flex", padding: "30px 50px", alignItems: "center", gap: "10px", borderRadius: "8px", background: "rgba(15, 17, 26, 0.55)", margin: "20px 13px", width: "15pc" }}>
            <p style={{ color: "#B1B6C6", fontSize: "15 px", fontStyle: "normal", fontWeight: "400", lineHeight: "21.6px", textTransform: "uppercase" }}>No Messages Yet</p>
          </div>

          {/* message input form */}
          <input type="text" placeholder='Login to chat'  style={{ display: "flex", width: "15pc", padding: "8px 11px", alignItems: "flex-start", gap: "10px", borderRadius: "6px", background: "rgba(15, 17, 26, 0.55)", margin: "29pc 13px", color:"#fff" }}/>

          <div style={{ margin: "-27.5pc 18px"  }}>

            <div style={{ display: "inline-flex", alignItems: "flex-start", gap: "12px", }}> 
              <img src={EMOJI} alt="emoji" style={{ width: "21px", height: "20px", flexShrink: "0" }}/>
              <img src={SETTINGS} alt="settings" style={{ width: "13px", height: "13px", flexShrink: "0" }}/>
              <p style={{ width: "37px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", fontWeight: "400", lineHeight: "14.4px", textTransform: "uppercase" }}>Rules</p>

              <div style={{ display: "flex", gap: "6px", alignItems: "center", margin: "-5px 3.2pc" }}>
                <p style={{ width: "24px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", fontWeight: "400", lineHeight: "14.4px", textTransform: "uppercase" }}>200</p>
              <div style={{ display: "inline-flex", padding: "4px 8px", alignItems: "flex-start", gap: "10px", borderRadius: "6px", background: "#86F454", boxShadow: "0px 0px 10px 0px rgba(118, 255, 25, 0.40)", cursor: "pointer" }}>
                <p style={{ color: "#141722", fontSize: "12px", fontStyle: "normal", fontWeight: "400", lineHeight: "14.4px", letterSpacing: "0.5px", textTransform: "uppercase" }}>Send</p>
              </div>
            </div>
          </div>

          

          </div>


        </div>  
    </div>

  )
}

export default MessagesHome;