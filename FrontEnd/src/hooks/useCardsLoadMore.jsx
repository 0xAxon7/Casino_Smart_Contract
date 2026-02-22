import { useEffect, useState } from "react";

const useCardsLoadMore = (category, subcategory, images) => {
  const [visibleCards, setVisibleCards] = useState(35);
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    let localFilteredImages = [];

    if (category && subcategory) {
      const categoryData = images.categories.find(
        (cat) => cat.name === category
      );
      if (categoryData) {
        const subcategoryData = categoryData.subcategories.find(
          (subcat) => subcat.name === subcategory
        );
        if (subcategoryData) {
          localFilteredImages = subcategoryData.cards.map((card) => card);
        }
      }
    } else {
      localFilteredImages = images.CASINO_IMAGES;
    }

    setFilteredImages(localFilteredImages);
  }, [category, subcategory, images]);

  const loadMoreImages = () => {
    setVisibleCards((prevCount) => prevCount + 14);
  };

  return { visibleCards, filteredImages, loadMoreImages };
};

export default useCardsLoadMore;
