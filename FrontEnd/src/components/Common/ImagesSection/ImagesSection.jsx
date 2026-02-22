import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import useCardsLoadMore from "../../../hooks/useCardsLoadMore";
import Button from "../Buttons/Button";
import HoverableImage from "../HoverableImage/HoverableImage";
import NotFound from "../NotFound/NotFound";
import { StyledImageSection } from "./styles";

const ImagesSection = ({ category, subcategory, images }) => {
  const { searchState } = useContext(AppContext);
  const { visibleCards, filteredImages, loadMoreImages } = useCardsLoadMore(
    category,
    subcategory,
    images
  );

  // Local state for sorting
  const [sortedImages, setSortedImages] = useState(filteredImages);

  useEffect(() => {
    // Apply filtering based on the search state
    const filteredImagesAgain = filteredImages.filter((image) => {
      const passesSearchQuery = image.name
        ?.toLowerCase()
        ?.includes(searchState.searchQuery?.toLowerCase());
      const passesProviderFilter =
        searchState.selectedProvider === "All" ||
        image.provider === searchState.selectedProvider;
      const passesSortFilter =
        searchState.selectedSort === "Alphabetical"
          ? true
          : searchState.selectedSort === "Alphabetical Z-A"
          ? true
          : searchState.selectedSort === "Popular" ||
            image.sort === searchState.selectedSort;

      return passesSearchQuery && passesProviderFilter && passesSortFilter;
    });

    if (searchState.selectedSort === "Alphabetical") {
      filteredImagesAgain.sort((a, b) => a.name.localeCompare(b.name));
    } else if (searchState.selectedSort === "Alphabetical Z-A") {
      filteredImagesAgain.sort((a, b) => b.name.localeCompare(a.name));
    }

    setSortedImages(filteredImagesAgain);
  }, [
    searchState.selectedSort,
    searchState.searchQuery,
    searchState.selectedProvider,
    filteredImages,
  ]);

  return (
    <StyledImageSection>
      <div className="image-cards">
        {sortedImages?.slice(0, visibleCards).map((image, index) => (
          <HoverableImage key={index} src={image.img} alt="casino" />
        ))}
      </div>
      {sortedImages?.length >= visibleCards && (
        <div className="btn-wrapper">
          <Button className="button-load-more" onClick={loadMoreImages}>
            Load More
          </Button>
        </div>
      )}
      {sortedImages?.length === 0 ? <NotFound text="NO GAMES FOUND" /> : null}
    </StyledImageSection>
  );
};

export default ImagesSection;
