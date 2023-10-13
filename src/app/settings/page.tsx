"use client";

import { useState } from "react";

const Settings = () => {
  const [textSize, setTextSize] = useState(16);

  return (
    <div className="mx-6">
      <h1 className="text-5xl mb-10 lg:text-7xl font-extrabold dark:text-white transition-all ease-linear timing">
        Settings
      </h1>

      <div className="my-5 text-lg font-medium max-w-md">
        <label
          htmlFor="font-range"
          className="block uppercase mb-2 text-sm lg:text-lg font-medium text-gray-900 dark:text-white"
        >
          Default Font Size
        </label>
        <div className="flex gap-8 items-center">
          <input
            id="font-range"
            type="range"
            value={textSize}
            min={12}
            max={30}
            onChange={(ev) => setTextSize(+ev.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            disabled
          />
          <p className="w-[25%] mb-0 dark:text-slate-50 text-sm">{textSize} px</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
