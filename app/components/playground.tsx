import React from 'react';
import PlaygroundSetting from './playgroundSetting';

interface PlaygroundProps {
  height: number;
  width: number;
}

const Playground: React.FC<PlaygroundProps> = ({ height, width }) => {
  const [backgroundColor, setBackgroundColor] = useState("bg-white");


  return (
    <div
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
      className="flex border border-slate-500 bg-white"
    >
      This is playground
    </div>
  );
};

export default Playground;