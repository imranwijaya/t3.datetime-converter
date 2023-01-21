import type { NextPage } from "next";
import type { ChangeEvent } from "react";
import { useContext } from "react";
import { GlobalContext } from "@components/GlobalContext";

const DatetimeFormat: NextPage = () => {
  const { setCustomFormat } = useContext(GlobalContext);
  const inputOnBlurHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setCustomFormat(event.target.value);

  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="text"
          className="input-bordered input-ghost input input-sm w-full focus:outline-none"
          placeholder="Format (default: EEEE, dd MMMM yyyy HH:mm:ss zzzz)"
          onBlur={inputOnBlurHandler}
        />
      </div>
    </div>
  );
};

export default DatetimeFormat;
