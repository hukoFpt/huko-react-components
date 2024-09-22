"use client";

import React, { useState } from "react";

interface PlaygroundSettingProps {
  config: { height: number; width: number };
  setConfig: React.Dispatch<
    React.SetStateAction<{ height: number; width: number }>
  >;
}

const PlaygroundSetting: React.FC<PlaygroundSettingProps> = ({
  config,
  setConfig,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedConfig = {
      ...config,
      [name]: Number(value),
    };
    setConfig(updatedConfig);
  };

  const [backgroundColor, setBackgroundColor] = useState("bg-slate-900");

  const handleColorClick = (colorClass: string) => {
    setBackgroundColor(colorClass);
  };

  return (
    <div className="px-2 w-full border-t-4 border-r-4 border-slate-900 h-[93vh]">
      <p className="text-center text-xl font-bold">Playground Setting</p>
      <div>
        <div className="font-semibold">Canvas</div>
        <div className="flex items-center gap-1">
          <label className="flex">
            <div className="w-5">W:</div>
            <input
              className="mx-2 px-2 w-16 border bg-slate-900 border-slate-500 rounded-md"
              type="number"
              max={1400}
              min={200}
              name="width"
              value={config.width}
              onChange={handleInputChange}
            />
            px
          </label>
        </div>
        <div>
          <label className="flex">
            <div className="w-5">H:</div>
            <input
              className="mx-2 px-2 w-16 border bg-slate-900 border-slate-500 rounded-md"
              type="number"
              name="height"
              max={800}
              min={200}
              value={config.height}
              onChange={handleInputChange}
            />
            px
          </label>
        </div>
        <div className="font-semibold mt-2">Background</div>
        <div>
          <div className="flex items-center gap-2">
            <span className="w-14 font-semibold">Slate</span>
            <span
              className="block w-6 h-4 bg-slate-100 rounded-md"
              onClick={() => handleColorClick("bg-slate-100")}
            ></span>
            <span className="block w-6 h-4 bg-slate-200 rounded-md"></span>
            <span className="block w-6 h-4 bg-slate-300 rounded-md"></span>
            <span className="block w-6 h-4 bg-slate-400 rounded-md"></span>
            <span className="block w-6 h-4 bg-slate-500 rounded-md"></span>
            <span className="block w-6 h-4 bg-slate-600 rounded-md"></span>
            <span className="block w-6 h-4 bg-slate-700 rounded-md"></span>
            <span className="block w-6 h-4 bg-slate-800 rounded-md"></span>
            <span className="block w-6 h-4 bg-slate-900 rounded-md"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-14 font-semibold">Grey</span>
            <span className="block w-6 h-4 bg-gray-100 rounded-md"></span>
            <span className="block w-6 h-4 bg-gray-200 rounded-md"></span>
            <span className="block w-6 h-4 bg-gray-300 rounded-md"></span>
            <span className="block w-6 h-4 bg-gray-400 rounded-md"></span>
            <span className="block w-6 h-4 bg-gray-500 rounded-md"></span>
            <span className="block w-6 h-4 bg-gray-600 rounded-md"></span>
            <span className="block w-6 h-4 bg-gray-700 rounded-md"></span>
            <span className="block w-6 h-4 bg-gray-800 rounded-md"></span>
            <span className="block w-6 h-4 bg-gray-900 rounded-md"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-14 font-semibold">Zinc</span>
            <span className="block w-6 h-4 bg-zinc-100 rounded-md"></span>
            <span className="block w-6 h-4 bg-zinc-200 rounded-md"></span>
            <span className="block w-6 h-4 bg-zinc-300 rounded-md"></span>
            <span className="block w-6 h-4 bg-zinc-400 rounded-md"></span>
            <span className="block w-6 h-4 bg-zinc-500 rounded-md"></span>
            <span className="block w-6 h-4 bg-zinc-600 rounded-md"></span>
            <span className="block w-6 h-4 bg-zinc-700 rounded-md"></span>
            <span className="block w-6 h-4 bg-zinc-800 rounded-md"></span>
            <span className="block w-6 h-4 bg-zinc-900 rounded-md"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-14 font-semibold">Neutral</span>
            <span className="block w-6 h-4 bg-neutral-100 rounded-md"></span>
            <span className="block w-6 h-4 bg-neutral-200 rounded-md"></span>
            <span className="block w-6 h-4 bg-neutral-300 rounded-md"></span>
            <span className="block w-6 h-4 bg-neutral-400 rounded-md"></span>
            <span className="block w-6 h-4 bg-neutral-500 rounded-md"></span>
            <span className="block w-6 h-4 bg-neutral-600 rounded-md"></span>
            <span className="block w-6 h-4 bg-neutral-700 rounded-md"></span>
            <span className="block w-6 h-4 bg-neutral-800 rounded-md"></span>
            <span className="block w-6 h-4 bg-neutral-900 rounded-md"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-14 font-semibold">Stone</span>
            <span className="block w-6 h-4 bg-stone-100 rounded-md"></span>
            <span className="block w-6 h-4 bg-stone-200 rounded-md"></span>
            <span className="block w-6 h-4 bg-stone-300 rounded-md"></span>
            <span className="block w-6 h-4 bg-stone-400 rounded-md"></span>
            <span className="block w-6 h-4 bg-stone-500 rounded-md"></span>
            <span className="block w-6 h-4 bg-stone-600 rounded-md"></span>
            <span className="block w-6 h-4 bg-stone-700 rounded-md"></span>
            <span className="block w-6 h-4 bg-stone-800 rounded-md"></span>
            <span className="block w-6 h-4 bg-stone-900 rounded-md"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-14 font-semibold">Red</span>
            <span className="block w-6 h-4 bg-red-100 rounded-md"></span>
            <span className="block w-6 h-4 bg-red-200 rounded-md"></span>
            <span className="block w-6 h-4 bg-red-300 rounded-md"></span>
            <span className="block w-6 h-4 bg-red-400 rounded-md"></span>
            <span className="block w-6 h-4 bg-red-500 rounded-md"></span>
            <span className="block w-6 h-4 bg-red-600 rounded-md"></span>
            <span className="block w-6 h-4 bg-red-700 rounded-md"></span>
            <span className="block w-6 h-4 bg-red-800 rounded-md"></span>
            <span className="block w-6 h-4 bg-red-900 rounded-md"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-14 font-semibold">Orange</span>
            <span className="block w-6 h-4 bg-orange-100 rounded-md"></span>
            <span className="block w-6 h-4 bg-orange-200 rounded-md"></span>
            <span className="block w-6 h-4 bg-orange-300 rounded-md"></span>
            <span className="block w-6 h-4 bg-orange-400 rounded-md"></span>
            <span className="block w-6 h-4 bg-orange-500 rounded-md"></span>
            <span className="block w-6 h-4 bg-orange-600 rounded-md"></span>
            <span className="block w-6 h-4 bg-orange-700 rounded-md"></span>
            <span className="block w-6 h-4 bg-orange-800 rounded-md"></span>
            <span className="block w-6 h-4 bg-orange-900 rounded-md"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-14 font-semibold">Amber</span>
            <span className="block w-6 h-4 bg-amber-100 rounded-md"></span>
            <span className="block w-6 h-4 bg-amber-200 rounded-md"></span>
            <span className="block w-6 h-4 bg-amber-300 rounded-md"></span>
            <span className="block w-6 h-4 bg-amber-400 rounded-md"></span>
            <span className="block w-6 h-4 bg-amber-500 rounded-md"></span>
            <span className="block w-6 h-4 bg-amber-600 rounded-md"></span>
            <span className="block w-6 h-4 bg-amber-700 rounded-md"></span>
            <span className="block w-6 h-4 bg-amber-800 rounded-md"></span>
            <span className="block w-6 h-4 bg-amber-900 rounded-md"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-14 font-semibold">Yellow</span>
            <span className="block w-6 h-4 bg-yellow-100 rounded-md"></span>
            <span className="block w-6 h-4 bg-yellow-200 rounded-md"></span>
            <span className="block w-6 h-4 bg-yellow-300 rounded-md"></span>
            <span className="block w-6 h-4 bg-yellow-400 rounded-md"></span>
            <span className="block w-6 h-4 bg-yellow-500 rounded-md"></span>
            <span className="block w-6 h-4 bg-yellow-600 rounded-md"></span>
            <span className="block w-6 h-4 bg-yellow-700 rounded-md"></span>
            <span className="block w-6 h-4 bg-yellow-800 rounded-md"></span>
            <span className="block w-6 h-4 bg-yellow-900 rounded-md"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-14 font-semibold">Lime</span>
            <span className="block w-6 h-4 bg-lime-100 rounded-md"></span>
            <span className="block w-6 h-4 bg-lime-200 rounded-md"></span>
            <span className="block w-6 h-4 bg-lime-300 rounded-md"></span>
            <span className="block w-6 h-4 bg-lime-400 rounded-md"></span>
            <span className="block w-6 h-4 bg-lime-500 rounded-md"></span>
            <span className="block w-6 h-4 bg-lime-600 rounded-md"></span>
            <span className="block w-6 h-4 bg-lime-700 rounded-md"></span>
            <span className="block w-6 h-4 bg-lime-800 rounded-md"></span>
            <span className="block w-6 h-4 bg-lime-900 rounded-md"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-14 font-semibold">Green</span>
            <span className="block w-6 h-4 bg-green-100 rounded-md"></span>
            <span className="block w-6 h-4 bg-green-200 rounded-md"></span>
            <span className="block w-6 h-4 bg-green-300 rounded-md"></span>
            <span className="block w-6 h-4 bg-green-400 rounded-md"></span>
            <span className="block w-6 h-4 bg-green-500 rounded-md"></span>
            <span className="block w-6 h-4 bg-green-600 rounded-md"></span>
            <span className="block w-6 h-4 bg-green-700 rounded-md"></span>
            <span className="block w-6 h-4 bg-green-800 rounded-md"></span>
            <span className="block w-6 h-4 bg-green-900 rounded-md"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-14 font-semibold">Emerald</span>
            <span className="block w-6 h-4 bg-emerald-100 rounded-md"></span>
            <span className="block w-6 h-4 bg-emerald-200 rounded-md"></span>
            <span className="block w-6 h-4 bg-emerald-300 rounded-md"></span>
            <span className="block w-6 h-4 bg-emerald-400 rounded-md"></span>
            <span className="block w-6 h-4 bg-emerald-500 rounded-md"></span>
            <span className="block w-6 h-4 bg-emerald-600 rounded-md"></span>
            <span className="block w-6 h-4 bg-emerald-700 rounded-md"></span>
            <span className="block w-6 h-4 bg-emerald-800 rounded-md"></span>
            <span className="block w-6 h-4 bg-emerald-900 rounded-md"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-14 font-semibold">Teal</span>
            <span className="block w-6 h-4 bg-teal-100 rounded-md"></span>
            <span className="block w-6 h-4 bg-teal-200 rounded-md"></span>
            <span className="block w-6 h-4 bg-teal-300 rounded-md"></span>
            <span className="block w-6 h-4 bg-teal-400 rounded-md"></span>
            <span className="block w-6 h-4 bg-teal-500 rounded-md"></span>
            <span className="block w-6 h-4 bg-teal-600 rounded-md"></span>
            <span className="block w-6 h-4 bg-teal-700 rounded-md"></span>
            <span className="block w-6 h-4 bg-teal-800 rounded-md"></span>
            <span className="block w-6 h-4 bg-teal-900 rounded-md"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-14 font-semibold">Cyan</span>
            <span className="block w-6 h-4 bg-cyan-100 rounded-md"></span>
            <span className="block w-6 h-4 bg-cyan-200 rounded-md"></span>
            <span className="block w-6 h-4 bg-cyan-300 rounded-md"></span>
            <span className="block w-6 h-4 bg-cyan-400 rounded-md"></span>
            <span className="block w-6 h-4 bg-cyan-500 rounded-md"></span>
            <span className="block w-6 h-4 bg-cyan-600 rounded-md"></span>
            <span className="block w-6 h-4 bg-cyan-700 rounded-md"></span>
            <span className="block w-6 h-4 bg-cyan-800 rounded-md"></span>
            <span className="block w-6 h-4 bg-cyan-900 rounded-md"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-14 font-semibold">Sky</span>
            <span className="block w-6 h-4 bg-sky-100 rounded-md"></span>
            <span className="block w-6 h-4 bg-sky-200 rounded-md"></span>
            <span className="block w-6 h-4 bg-sky-300 rounded-md"></span>
            <span className="block w-6 h-4 bg-sky-400 rounded-md"></span>
            <span className="block w-6 h-4 bg-sky-500 rounded-md"></span>
            <span className="block w-6 h-4 bg-sky-600 rounded-md"></span>
            <span className="block w-6 h-4 bg-sky-700 rounded-md"></span>
            <span className="block w-6 h-4 bg-sky-800 rounded-md"></span>
            <span className="block w-6 h-4 bg-sky-900 rounded-md"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-14 font-semibold">Blue</span>
            <span className="block w-6 h-4 bg-blue-100 rounded-md"></span>
            <span className="block w-6 h-4 bg-blue-200 rounded-md"></span>
            <span className="block w-6 h-4 bg-blue-300 rounded-md"></span>
            <span className="block w-6 h-4 bg-blue-400 rounded-md"></span>
            <span className="block w-6 h-4 bg-blue-500 rounded-md"></span>
            <span className="block w-6 h-4 bg-blue-600 rounded-md"></span>
            <span className="block w-6 h-4 bg-blue-700 rounded-md"></span>
            <span className="block w-6 h-4 bg-blue-800 rounded-md"></span>
            <span className="block w-6 h-4 bg-blue-900 rounded-md"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-14 font-semibold">Indigo</span>
            <span className="block w-6 h-4 bg-indigo-100 rounded-md"></span>
            <span className="block w-6 h-4 bg-indigo-200 rounded-md"></span>
            <span className="block w-6 h-4 bg-indigo-300 rounded-md"></span>
            <span className="block w-6 h-4 bg-indigo-400 rounded-md"></span>
            <span className="block w-6 h-4 bg-indigo-500 rounded-md"></span>
            <span className="block w-6 h-4 bg-indigo-600 rounded-md"></span>
            <span className="block w-6 h-4 bg-indigo-700 rounded-md"></span>
            <span className="block w-6 h-4 bg-indigo-800 rounded-md"></span>
            <span className="block w-6 h-4 bg-indigo-900 rounded-md"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-14 font-semibold">Violet</span>
            <span className="block w-6 h-4 bg-violet-100 rounded-md"></span>
            <span className="block w-6 h-4 bg-violet-200 rounded-md"></span>
            <span className="block w-6 h-4 bg-violet-300 rounded-md"></span>
            <span className="block w-6 h-4 bg-violet-400 rounded-md"></span>
            <span className="block w-6 h-4 bg-violet-500 rounded-md"></span>
            <span className="block w-6 h-4 bg-violet-600 rounded-md"></span>
            <span className="block w-6 h-4 bg-violet-700 rounded-md"></span>
            <span className="block w-6 h-4 bg-violet-800 rounded-md"></span>
            <span className="block w-6 h-4 bg-violet-900 rounded-md"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-14 font-semibold">Purple</span>
            <span className="block w-6 h-4 bg-purple-100 rounded-md"></span>
            <span className="block w-6 h-4 bg-purple-200 rounded-md"></span>
            <span className="block w-6 h-4 bg-purple-300 rounded-md"></span>
            <span className="block w-6 h-4 bg-purple-400 rounded-md"></span>
            <span className="block w-6 h-4 bg-purple-500 rounded-md"></span>
            <span className="block w-6 h-4 bg-purple-600 rounded-md"></span>
            <span className="block w-6 h-4 bg-purple-700 rounded-md"></span>
            <span className="block w-6 h-4 bg-purple-800 rounded-md"></span>
            <span className="block w-6 h-4 bg-purple-900 rounded-md"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-14 font-semibold">Fuchsia</span>
            <span className="block w-6 h-4 bg-fuchsia-100 rounded-md"></span>
            <span className="block w-6 h-4 bg-fuchsia-200 rounded-md"></span>
            <span className="block w-6 h-4 bg-fuchsia-300 rounded-md"></span>
            <span className="block w-6 h-4 bg-fuchsia-400 rounded-md"></span>
            <span className="block w-6 h-4 bg-fuchsia-500 rounded-md"></span>
            <span className="block w-6 h-4 bg-fuchsia-600 rounded-md"></span>
            <span className="block w-6 h-4 bg-fuchsia-700 rounded-md"></span>
            <span className="block w-6 h-4 bg-fuchsia-800 rounded-md"></span>
            <span className="block w-6 h-4 bg-fuchsia-900 rounded-md"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-14 font-semibold">Pink</span>
            <span className="block w-6 h-4 bg-pink-100 rounded-md"></span>
            <span className="block w-6 h-4 bg-pink-200 rounded-md"></span>
            <span className="block w-6 h-4 bg-pink-300 rounded-md"></span>
            <span className="block w-6 h-4 bg-pink-400 rounded-md"></span>
            <span className="block w-6 h-4 bg-pink-500 rounded-md"></span>
            <span className="block w-6 h-4 bg-pink-600 rounded-md"></span>
            <span className="block w-6 h-4 bg-pink-700 rounded-md"></span>
            <span className="block w-6 h-4 bg-pink-800 rounded-md"></span>
            <span className="block w-6 h-4 bg-pink-900 rounded-md"></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-14 font-semibold">Rose</span>
            <span className="block w-6 h-4 bg-rose-100 rounded-md"></span>
            <span className="block w-6 h-4 bg-rose-200 rounded-md"></span>
            <span className="block w-6 h-4 bg-rose-300 rounded-md"></span>
            <span className="block w-6 h-4 bg-rose-400 rounded-md"></span>
            <span className="block w-6 h-4 bg-rose-500 rounded-md"></span>
            <span className="block w-6 h-4 bg-rose-600 rounded-md"></span>
            <span className="block w-6 h-4 bg-rose-700 rounded-md"></span>
            <span className="block w-6 h-4 bg-rose-800 rounded-md"></span>
            <span className="block w-6 h-4 bg-rose-900 rounded-md"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundSetting;
