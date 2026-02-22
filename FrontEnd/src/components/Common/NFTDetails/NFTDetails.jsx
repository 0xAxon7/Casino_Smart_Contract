import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NFTS_DATA } from "../../../assets/MockData/mockData";
import { ReactComponent as ARROW_LEFT } from "../../../assets/images/Arrow-left-1.svg";
import Collection from "./Collection";
import DetailsContainer from "./DetailsContainer";
import Stats from "./Stats";
import Traits from "./Traits";
import { StyleNFTDetails } from "./styles";

const NFTDetails = () => {
  const { nftId } = useParams();
  const navigate = useNavigate();

  const nftDetails = NFTS_DATA.find((nft) => nft.id === nftId);

  if (!nftDetails) {
    // Handle the case where the NFT ID is not found
    return <div>NFT not found</div>;
  }

  return (
    <StyleNFTDetails>
      <button className="back-button" onClick={() => navigate(-1)}>
        <ARROW_LEFT />
        <span>Back</span>
      </button>
      <DetailsContainer nftDetails={nftDetails} />
      <div className="section-title">Sports Rollbot Stats</div>
      <Stats stats={nftDetails.stats} />
      <div className="section-title">Traits</div>
      <Traits traits={nftDetails.traits} />
      <div className="section-title">Collection</div>
      <Collection />
    </StyleNFTDetails>
  );
};

export default NFTDetails;
