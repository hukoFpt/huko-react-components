"use client";

import React, { useState, useEffect } from "react";
import PlaygroundSetting from "./playgroundSetting";
import Playground from "./playground";
import playgroundConfig from "../config/playgroundConfig.json";

const PlaygroundContainer: React.FC = () => {
  const initialConfig = JSON.parse(
    localStorage.getItem("playgroundConfig") || JSON.stringify(playgroundConfig)
  );
  const [config, setConfig] = useState(initialConfig);

  useEffect(() => {
    localStorage.setItem("playgroundConfig", JSON.stringify(config));
  }, [config]);

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="text-center font-bold text-2xl bg-slate-700 text-white p-3 w-full">
        React Component Playground
      </div>
      <div className="flex w-full justify-between">
        <div className="w-1/5 ">
          <PlaygroundSetting config={config} setConfig={setConfig} />
        </div>
        <div className="w-4/5 border-t-4 border-slate-900 h-[93vh] bg-slate-700 flex items-center justify-center">
          <Playground height={config.height} width={config.width} />
        </div>
      </div>
    </div>
  );
};

export default PlaygroundContainer;
