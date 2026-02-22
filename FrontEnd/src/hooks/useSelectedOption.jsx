import { useState } from "react";

const useSelectedOption = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const updateSelectedOption = (sidebarUrl) => {
    setSelectedOption(sidebarUrl);
  };

  return { selectedOption, updateSelectedOption };
};

export default useSelectedOption;
