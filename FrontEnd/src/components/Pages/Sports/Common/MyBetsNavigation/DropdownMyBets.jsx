import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { StyleDropdownMyBets } from "./styles";

const DropdownMyBets = ({
  options,
  label,
  selectedOption,
  onSelectOption,
  buttonClassName = "",
  listClassName = "",
}) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <StyleDropdownMyBets w-56 className={`block top-16 text-right`}>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className={`container-dropdown ${buttonClassName}`}>
          <div className="date-picker" data-editor-id="datePicker">
            <div className="date-input flex">
              <div
                className="icon-dropdown"
                style={{ width: "16px", height: "16px" }}
              >
                <span style={{ marginLeft: "6px" }}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    style={{
                      rotate: isOpened ? "180deg" : "",
                      fill: "currentcolor",
                    }}
                  >
                    <path d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                  </svg>
                </span>
              </div>
              {selectedOption}
            </div>
          </div>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="dropdown-container">
            <div className="options-container">
              {options.map((option, index) => (
                <Menu.Item
                  key={index}
                  onClick={() => onSelectOption(option.label)}
                >
                  <span className="container-option">
                    <div
                      className={`option ${
                        option.label === selectedOption ? "active-option" : ""
                      }`}
                      data-editor-id="datePickerButton"
                    >
                      {option.label}
                    </div>
                  </span>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </StyleDropdownMyBets>
  );
};

export default DropdownMyBets;
