import React from "react";

// TODO: Simplify logic to have more dry and clearer code and follow naming conventions

const SwitchButton = ({ onSwitch, tempCelsius }) => {
  return (
    <div
      onClick={onSwitch}
      className="cursor-pointer flex justify-between items-center w-28 h-10 rounded-full bg-white/[0.2]"
    >
      <div>
        {!tempCelsius ? (
          <p className="pl-5">C</p>
        ) : (
          tempCelsius && <button className="rounded-full w-16 h-10 bg-white/[0.2]">C</button>
        )}
      </div>
      <div>
        {tempCelsius ? (
          <p className="pr-5">F</p>
        ) : (
          <button className=" rounded-full w-16 h-10 bg-white/[0.2]">F</button>
        )}
      </div>
    </div>
  );
};
export default SwitchButton;
