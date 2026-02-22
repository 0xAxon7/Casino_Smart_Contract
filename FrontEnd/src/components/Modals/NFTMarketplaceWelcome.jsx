import Modal from "./Modal";
import { StyleNFTMarketplaceWelcome } from "./styles";

const NFTMarketplaceWelcome = ({ isOpen, onClose }) => {
  return (
    <Modal maxWidth={710} isOpen={isOpen}>
      <StyleNFTMarketplaceWelcome
        url={
          "https://rollbit.com/static/media/banner-jackpot.d512c5aab16b783bff83.jpg"
        }
      >
        <div class="content-container">
          <h1 class="heading" style={{ margin: "0px" }}>
            NFT Marketplace
          </h1>
          <p>
            NFT Marketplace is not an activity covered by our gaming license and
            is offered by Rollbit independently.
          </p>
          <button class="acknowledge-button" onClick={onClose}>
            I Acknowledge
          </button>
        </div>
      </StyleNFTMarketplaceWelcome>
    </Modal>
  );
};

export default NFTMarketplaceWelcome;
