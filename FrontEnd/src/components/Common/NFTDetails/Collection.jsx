import React from "react";
import { ReactComponent as ARROW_RIGHT } from "../../../assets/images/arrow-line-right.svg";
import { ReactComponent as LINK_IMG } from "../../../assets/images/link.svg";
import { StyleCollection } from "./styles";

const Collection = () => {
  return (
    <StyleCollection>
      <a href="/nft/eth:0x1de7abda2d73a01aa8dca505bdcb773841211daf">
        <img
          src="https://i.seadn.io/gae/57kEC5ISf2rx0C289XRZai0sIbsyKELEskI4tRWkEh8ZcTDZZaVfo8lcybI3jmKCaalzGV3PF6z2V7Fooam99Ef2HYQs-3Grt56srw?w=500&amp;auto=format"
          className="banner-img"
          alt=""
        />
      </a>
      <div className="collection-title">
        <a href="/nft/eth:0x1de7abda2d73a01aa8dca505bdcb773841211daf">
          <img
            src="https://i.seadn.io/gae/vY0sat6irhxODPlVqkFbKpwwfvTttLmwa4jj8WfNyLK8s0R7aY_3IgXd38Zb54GA1yKxEXZ0bufRBllQAy_y0mzelIk27A6RaOx22A?w=500&amp;auto=format"
            className="nft-img"
            alt=""
          />
        </a>
        <a
          href="/nft/eth:0x1de7abda2d73a01aa8dca505bdcb773841211daf"
          style={{ marginRight: "auto" }}
        >
          <div className="collection-name">Sports Rollbots</div>
        </a>
        <a
          href="https://opensea.io/0x772d8d6e4a4a5251d7a174e3f60e3f954b386af0"
          target="blank"
          className="author"
          style={{ margin: "0px" }}
        >
          Created By
          <span style={{ color: "rgb(255, 255, 255)", marginLeft: "4px" }}>
            Rollbots
          </span>
        </a>
      </div>
      <div className="description">
        **OWNER COUNT and TRADED VOLUME:** The owner count and volume traded
        displayed on OpenSea is not entirely accurate. Majority of trading and
        utility staking happens on{" "}
        <a target="blank" href="https://rollbot.com">
          Rollbot.com
        </a>
        . Total holder count is more than 4,000.
        <br />
        <br />
        A collection of 10,000 unique robots generated algorithmically using
        over 600 traits with proof of ownership on the Ethereum blockchain and a
        focus on utility. Inspired by Rollbit's first NFT project and other
        popular utility NFT projects, Sports Rollbots are based on the ERC-721
        standard that underlies most digital collectible and utility projects.
        <br />
        <br />
        Each Rollbot is a sports-themed piece of digital art that doubles up as
        a personalised VIP membership for Rollbit's new sportsbook. Own a part
        of Rollbit's sportsbook and enjoy the perks!
      </div>
      <div style={{ display: "flex" }}>
        <a
          className="link"
          href="/nft/eth:0x1de7abda2d73a01aa8dca505bdcb773841211daf"
          style={{ marginBottom: "24px" }}
        >
          <ARROW_RIGHT />
          Browse Marketplace
        </a>
        <a
          href="https://opensea.io/collection/sportsbots"
          target="blank"
          className="link"
          style={{ marginBottom: "24px" }}
        >
          <LINK_IMG />
          OpenSea
        </a>
      </div>
    </StyleCollection>
  );
};

export default Collection;
