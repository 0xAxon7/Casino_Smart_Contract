import React, { useContext, useMemo } from "react";
import { NFTS_DATA } from "../../../assets/MockData/mockData";
import NFTCard from "../NFTCard/NFTCard";
import { StyledNFTSection } from "./styles";

import { useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import Button from "../Buttons/Button";
import NotFound from "../NotFound/NotFound";

const useNFTsLoadMore = (initialItems, itemsPerPage = 14) => {
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const [allItems, setAllItems] = useState(initialItems);

  const loadMoreItems = () => {
    setVisibleItems((prevCount) => prevCount + itemsPerPage);
  };

  const getVisibleItems = () => {
    return allItems.slice(0, visibleItems);
  };

  return { loadMoreItems, getVisibleItems, allItems };
};

const multiplyArray = (array, multiplier) => {
  const multipliedArray = [];
  for (let i = 0; i < multiplier; i++) {
    multipliedArray.push(...array);
  }
  return multipliedArray;
};

const NFTSection = ({ isLootbox }) => {
  const { searchState } = useContext(AppContext);

  // Multiply the NFTS_DATA array by 5
  const multipliedNFTS_DATA = useMemo(() => multiplyArray(NFTS_DATA, 5), []);

  const { loadMoreItems, getVisibleItems, allItems } =
    useNFTsLoadMore(multipliedNFTS_DATA);

  const filteredNFTs = useMemo(() => {
    return allItems.filter((nft) => {
      const passesSearchQuery = nft.title
        ?.toLowerCase()
        ?.includes(searchState.searchQuery?.toLowerCase());
      const passesProviderFilter =
        searchState.selectedProvider === "All" ||
        nft.provider === searchState.selectedProvider;
      const passesSortFilter =
        searchState.selectedSort === "Popular" ||
        nft.sort === searchState.selectedSort;

      return passesSearchQuery && passesProviderFilter && passesSortFilter;
    });
  }, [searchState, allItems]);

  const handleLoadMore = () => {
    loadMoreItems();
  };

  return (
    <StyledNFTSection>
      <div className="nft-cards">
        {filteredNFTs.slice(0, getVisibleItems().length).map((card, index) => (
          <Link to={`/nft/details/${card.id}`} key={index}>
            <NFTCard
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              subTitle={card.subTitle}
              amount={card.amount}
              buttonText={card.buttonText}
              prices={card.prices}
              currentPrice={card.currentPrice}
              hasPercentageText={card.hasPercentageText}
              isLootbox={isLootbox}
            />
          </Link>
        ))}
      </div>
      {filteredNFTs.length > getVisibleItems().length && (
        <div className="btn-wrapper">
          <Button className="button-load-more" onClick={handleLoadMore}>
            Load More
          </Button>
        </div>
      )}
      {filteredNFTs.length === 0 ? <NotFound text="NO NFTS FOUND" /> : null}
    </StyledNFTSection>
  );
};

export default NFTSection;
