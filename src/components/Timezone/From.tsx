import type { NextPage } from "next";
import type { ComponentType } from "react";
import type {
  DropdownIndicatorProps,
  ControlProps,
  OptionProps,
  NoticeProps,
  StylesConfig,
  SingleValue,
  MultiValue,
  GroupBase,
  LoadingIndicatorProps,
} from "react-select";
import { useContext, useState } from "react";
import { GlobalContext } from "@components/GlobalContext";
import AsyncSelect from "react-select/async";
import { components } from "react-select";
import { WindowedMenuList } from "react-windowed-select";
import debounce from "lodash.debounce";
import { TimezonesArayObject } from "@utils/timezone";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type ValueProps = { label: string; value: string };

type DropdownProps = {
  children?: React.ReactNode;
  readonly isOpen: boolean;
  readonly target: React.ReactNode;
  readonly onClose: () => void;
};

const selectStyles: StylesConfig<ValueProps> = {
  option: (base) => ({ ...base, cursor: "pointer" }),
  menu: () => ({}),
  input: (base) => ({ ...base }),
  menuList: (base) => ({ ...base, maxHeight: 300 }),
};

const filterQuery = (q: string) => {
  if (q === "") {
    return TimezonesArayObject;
  } else {
    const filter = TimezonesArayObject.filter((timezone) => {
      const _q = q.toLowerCase().replace(/\s+/g, "");
      return timezone.value.toLowerCase().replace(/\s+/g, "").includes(_q);
    });
    return filter;
  }
};

const loadOptions = debounce(
  (input: string, callback: (options: ValueProps[]) => void) => {
    callback(filterQuery(input));
  },
  500
);

const TimezoneFrom: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { timezone, setTimezone } = useContext(GlobalContext);
  const dropdownOnCloseHandler = () => setIsOpen(false);
  const buttonOnClickHandler = () => setIsOpen((prev) => !prev);
  const selectOnChangeHandler = (
    newValue: SingleValue<ValueProps> | MultiValue<ValueProps>
  ) => {
    if (newValue && !Array.isArray(newValue)) {
      setTimezone(newValue as ValueProps);
    }
    setIsOpen(false);
  };
  return (
    <div className="w-full">
      <div className="relative">
        <Dropdown
          isOpen={isOpen}
          onClose={dropdownOnCloseHandler}
          target={
            <button
              onClick={buttonOnClickHandler}
              className={`${
                isOpen ? "btn-active" : ""
              } btn-outline btn-block btn-sm btn gap-1`}
            >
              <span>
                {timezone ? `Timezone: ${timezone.value}` : `Select Timezone`}
              </span>
              <ChevronUpDownIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          }
        >
          <AsyncSelect
            name="async-timezone"
            menuIsOpen
            autoFocus
            unstyled
            styles={selectStyles}
            value={timezone}
            loadOptions={loadOptions}
            onChange={selectOnChangeHandler}
            components={{
              MenuList: WindowedMenuList,
              IndicatorSeparator: null,
              DropdownIndicator,
              Control,
              Option,
              NoOptionsMessage,
              LoadingIndicator,
              LoadingMessage,
            }}
            isClearable={false}
            controlShouldRenderValue={false}
            hideSelectedOptions={false}
            backspaceRemovesValue={false}
            tabSelectsValue={false}
            placeholder="Search..."
          />
        </Dropdown>
      </div>
    </div>
  );
};

const Dropdown: NextPage<DropdownProps> = ({
  children,
  isOpen,
  target,
  onClose,
}) => (
  <div className="relative">
    {target}
    {isOpen ? (
      <div
        className={`input-bordered absolute inset-x-0 z-[2] mt-1 rounded-md border border-[hsl(var(--bc)/var(--tw-border-opacity))] bg-base-100 shadow-2xl`}
      >
        {children}
      </div>
    ) : null}
    {isOpen ? <div className="fixed inset-0 z-[1]" onClick={onClose} /> : null}
  </div>
);

const Control: NextPage<ControlProps<ValueProps>> = (props) => {
  return (
    <div className="p-2">
      <components.Control
        {...props}
        className="input-bordered input input-sm"
      />
    </div>
  );
};

const Option: ComponentType<
  OptionProps<ValueProps, boolean, GroupBase<ValueProps>>
> = (props) => {
  const { isSelected, isFocused, isDisabled } = props;
  const bgClass = isFocused ? "bg-primary" : "bg-none";
  const colorClass = isDisabled
    ? "text-gray-600"
    : isSelected
    ? "text-primary-content"
    : isFocused
    ? "text-primary-content"
    : "text-inherit";
  return (
    <components.Option
      {...props}
      className={`${bgClass} ${colorClass} py-2 pl-10 pr-4`}
    >
      <span
        className={`block truncate ${
          isSelected ? "font-medium" : "font-normal"
        }`}
      >
        {props.children}
      </span>
      {isSelected ? (
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-success">
          <CheckIcon className="h-5 w-5" aria-hidden="true" />
        </span>
      ) : null}
    </components.Option>
  );
};

const DropdownIndicator: NextPage<DropdownIndicatorProps<ValueProps>> = (
  props
) => {
  return (
    <components.DropdownIndicator {...props} className="hover:text-primary">
      <MagnifyingGlassIcon
        focusable="false"
        className="h-5 w-5"
        aria-hidden="true"
        role="presentation"
      />
    </components.DropdownIndicator>
  );
};

const LoadingIndicator: NextPage<LoadingIndicatorProps<ValueProps>> = () => {
  return (
    <svg
      className="-ml-1 mr-3 h-4 w-4 animate-spin text-inherit opacity-75"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

const LoadingMessage: NextPage<NoticeProps<ValueProps, boolean>> = (props) => {
  return (
    <components.LoadingMessage
      {...props}
      className="relative select-none py-2 pl-10 pr-4 text-base-content"
    />
  );
};

const NoOptionsMessage: NextPage<NoticeProps<ValueProps>> = (props) => {
  return (
    <components.NoOptionsMessage
      {...props}
      className="relative select-none py-2 pl-10 pr-4 text-base-content"
    />
  );
};

export default TimezoneFrom;
