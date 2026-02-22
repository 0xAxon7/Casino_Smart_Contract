// useFilter.js

import { useState } from "react";

const useFilter = (initialData) => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProvider, setSelectedProvider] = useState("All");
  const [selectedSort, setSelectedSort] = useState("All");

  // Implement filtering logic here
  const filteredData = data.filter((item) => {
    // Your filtering logic here based on searchQuery, selectedProvider, and selectedSort
  });

  const updateData = (newData) => {
    setData(newData);
  };

  return {
    data: filteredData,
    searchQuery,
    selectedProvider,
    selectedSort,
    setSearchQuery,
    setSelectedProvider,
    setSelectedSort,
    updateData,
  };
};

export default useFilter;
