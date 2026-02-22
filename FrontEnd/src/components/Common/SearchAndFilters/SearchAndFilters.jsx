import React, { useContext, useEffect, useRef, useState } from "react";

import {
  COLLECTION_OPTIONS,
  PROVIDER_OPTIONS,
  SORT_BY_OPTIONS,
  TRAITS_OPTIONS,
} from "../../../assets/MockData/dropdownsData";

import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import Dropdown from "../Dropdowns/Dropdown";
import SwitchToggle from "../SwitchToggle/SwitchToggle";
import { SearchInput, StyledSearchFilters } from "./styles";

const SearchAndFilters = ({
  hasSwitchToggle = false,
  labelSwitchToggle,
  hasProviderOptions = false,
  hasSortByOptions = false,
  hasCollectionOptions = false,
  hasTraitsOptions = false,
  providerOptions = PROVIDER_OPTIONS,
  sortByOptions = SORT_BY_OPTIONS,
  collectionOptions = COLLECTION_OPTIONS,
  traitsOptions = TRAITS_OPTIONS,
}) => {
  const {
    selectedOption,
    searchState,
    setSearchState,
    updateProvider,
    updateSort,
    updateCollection,
    updateTrait,
  } = useContext(AppContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [isToggle, setIsToggle] = useState(false);
  const previousSearchStateRef = useRef(searchState);

  const updateURL = () => {
    if (searchState === previousSearchStateRef.current) {
      return;
    }

    const queryParams = new URLSearchParams();

    if (searchState.searchQuery) {
      queryParams.set("query", searchState.searchQuery);
    }

    if (searchState.selectedProvider !== providerOptions?.[0].label) {
      queryParams.set("provider", searchState.selectedProvider);
    }

    if (searchState.selectedSort !== sortByOptions?.[0].label) {
      queryParams.set("sort", searchState.selectedSort);
    }

    if (searchState.selectedCollection !== collectionOptions?.[0].label) {
      queryParams.set("collection", searchState.selectedCollection);
    }

    if (searchState.selectedTrait !== traitsOptions?.[0].label) {
      queryParams.set("trait", searchState.selectedTrait);
    }

    // Update the previousSearchState reference
    previousSearchStateRef.current = searchState;

    const currentPath = location.pathname;

    navigate(`${currentPath}?${queryParams.toString()}`);
  };

  useEffect(() => {
    updateURL();
  }, [searchState]);

  useEffect(() => {
    updateProvider(providerOptions?.[0].label); // Reset the provider state
    updateSort(sortByOptions?.[0].label); // Reset the sort state
    updateCollection(collectionOptions?.[0].label); // Reset the provider state
    updateTrait(traitsOptions?.[0].label); // Reset the sort state

    return () => {
      setSearchState({ type: "UPDATE_SEARCH", payload: "" }); // Reset the search state
      updateProvider(providerOptions?.[0].label); // Reset the provider state
      updateSort(sortByOptions?.[0].label); // Reset the sort state
      updateCollection(collectionOptions?.[0].label); // Reset the provider state
      updateTrait(traitsOptions?.[0].label); // Reset the sort state
    };
  }, []);

  return (
    <StyledSearchFilters>
      <SearchInput
        type="text"
        placeholder={`Search ${
          selectedOption?.replace(/[^a-zA-Z]/g, " ")?.split("-") || " option"
        }`}
        value={searchState.searchQuery}
        onChange={(e) =>
          setSearchState({ type: "UPDATE_SEARCH", payload: e.target.value })
        }
      />
      {hasSwitchToggle && (
        <SwitchToggle
          checked={isToggle}
          toggle={setIsToggle}
          label={labelSwitchToggle}
        />
      )}
      {hasProviderOptions && (
        <Dropdown
          options={providerOptions}
          label="Provider"
          selectedOption={searchState.selectedProvider}
          onSelectOption={updateProvider}
          hasSearchInput={true}
        />
      )}
      {hasSortByOptions && (
        <Dropdown
          options={sortByOptions}
          label="Sort by"
          selectedOption={searchState.selectedSort}
          onSelectOption={updateSort}
        />
      )}
      {hasCollectionOptions && (
        <Dropdown
          options={collectionOptions}
          label="Collection"
          selectedOption={searchState.selectedCollection}
          onSelectOption={updateCollection}
        />
      )}
      {hasTraitsOptions && (
        <Dropdown
          options={traitsOptions}
          label="Traits"
          selectedOption={searchState.selectedTrait}
          onSelectOption={updateTrait}
        />
      )}
    </StyledSearchFilters>
  );
};

export default SearchAndFilters;
