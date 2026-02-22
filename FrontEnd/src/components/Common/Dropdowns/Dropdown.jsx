import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ReactComponent as ARROW_DOWN } from "../../../assets/images/Arrow-Down.svg";
import { ReactComponent as ARROW_UP } from "../../../assets/images/Arrow-Up.svg";
import { SearchInput } from "../SearchAndFilters/styles";
import { StyleDropdown } from "./styles";

const Dropdown = ({
  options,
  label,
  selectedOption,
  onSelectOption,
  hasSearchInput = false,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDropdown = () => {
    setIsOpened(!isOpened);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <StyleDropdown
      w-56
      className={`block top-16 text-right ${
        hasSearchInput ? "with-search" : ""
      }`}
    >
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="dropdown-button" onClick={toggleDropdown}>
            {label}: <span className="provider-text">{selectedOption}</span>
            <span style={{ marginLeft: "6px" }}>
              {isOpened ? <ARROW_UP /> : <ARROW_DOWN />}
            </span>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="dropdown-container options-container absolute right-0 mt-2 w-56 origin-top-right rounded-md focus:outline-none">
            {hasSearchInput && (
              <SearchInput
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            )}
            {filteredOptions.length === 0 ? (
              <div className="no-results">No results</div>
            ) : (
              <div className="options-list">
                {filteredOptions.map((option, index) => (
                  <Menu.Item key={index}>
                    <button
                      className={`option ${
                        option.label === selectedOption ? "active-option" : ""
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => {
                        onSelectOption(option.label);
                        toggleDropdown();
                      }}
                    >
                      {option.label}
                    </button>
                  </Menu.Item>
                ))}
              </div>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </StyleDropdown>
  );
};

export default Dropdown;
