// AppContext.js
import React, { createContext, useReducer, useState } from "react";

const AppContext = createContext();

// Define your initial state
const initialState = {
  searchQuery: "",
  selectedProvider: "All",
  selectedSort: "All",
};

// Create a reducer to handle state updates
const searchReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "UPDATE_PROVIDER":
      return { ...state, selectedProvider: action.payload };
    case "UPDATE_SORT":
      return { ...state, selectedSort: action.payload };
    case "UPDATE_COLLECTION":
      return { ...state, selectedCollection: action.payload };
    case "UPDATE_TRAIT":
      return { ...state, selectedTrait: action.payload };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);
  const [isChatBoxCollapsed, setIsChatBoxCollapsed] = useState(false);
  const [prevChatBoxOpen, setPrevChatBoxOpen] = useState(false);
  const [prevSidebarOpen, setPrevSidebarOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isTabletScreen, setIsTabletScreen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [onClickFunctionNext, setOnClickFunctionNext] = useState(null);
  const [onClickFunctionPrev, setOnClickFunctionPrev] = useState(null);
  const [searchState, setSearchState] = useReducer(searchReducer, initialState);
  const [sportsSelectedOption, setSportsSelectedOption] = useState("/home");
  const [selectedOptionCashier, setSelectedOptionCashier] = useState("Deposit");
  const [selectedSport, setSelectedSport] = useState("/soccer");

  const updateMobileScreen = (option) => {
    setIsMobileScreen(option);
  };
  const updateTabletScreen = (option) => {
    setIsTabletScreen(option);
  };
  const updateCashierOption = (option) => {
    setSelectedOptionCashier(option);
  };
  const updateSelectedSport = (option) => {
    setSelectedSport(option);
  };

  const updateSportsSelectedOption = (newOption) => {
    setSportsSelectedOption(newOption);
  };

  const updateSelectedOption = (option) => {
    setSelectedOption(option);
  };
  const updateSidebar = (option) => {
    setIsSidebarOpen(option);
  };
  const updateChatBox = (option) => {
    setIsChatBoxOpen(option);
  };
  const updateChatBoxCollapsed = (option) => {
    setIsChatBoxCollapsed(option);
  };
  const updatePrevSidebar = (option) => {
    setPrevSidebarOpen(option);
  };
  const updatePrevChatBox = (option) => {
    setPrevChatBoxOpen(option);
  };
  const toggleDropdown = (option) => {
    setOpenDropdown(option);
  };
  const updateLoggedIn = (option) => {
    setIsLoggedIn(option);
  };
  const updateOnClickFunctionNext = (option) => {
    setOnClickFunctionNext(option);
  };
  const updateOnClickFunctionPrev = (option) => {
    setOnClickFunctionPrev(option);
  };
  const updateProvider = (provider) => {
    setSearchState({ type: "UPDATE_PROVIDER", payload: provider });
  };
  const updateSort = (sort) => {
    setSearchState({ type: "UPDATE_SORT", payload: sort });
  };
  const updateCollection = (collection) => {
    setSearchState({ type: "UPDATE_COLLECTION", payload: collection });
  };
  const updateTrait = (trait) => {
    setSearchState({ type: "UPDATE_TRAIT", payload: trait });
  };

  return (
    <AppContext.Provider
      value={{
        selectedOption,
        isSidebarOpen,
        isChatBoxOpen,
        openDropdown,
        isLoggedIn,
        onClickFunctionNext,
        onClickFunctionPrev,
        searchState,
        sportsSelectedOption,
        selectedOptionCashier,
        selectedSport,
        isMobileScreen,
        isTabletScreen,
        prevSidebarOpen,
        prevChatBoxOpen,
        isChatBoxCollapsed,
        updatePrevSidebar,
        updatePrevChatBox,
        updateMobileScreen,
        updateTabletScreen,
        updateSelectedOption,
        updateSidebar,
        updateChatBox,
        toggleDropdown,
        updateLoggedIn,
        updateOnClickFunctionNext,
        updateOnClickFunctionPrev,
        setSearchState,
        updateProvider,
        updateSort,
        updateCollection,
        updateTrait,
        updateSportsSelectedOption,
        updateCashierOption,
        updateSelectedSport,
        updateChatBoxCollapsed,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
