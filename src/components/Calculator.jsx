import { useState } from "react";
import calculate from "../logic/calculate";

export default function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: 0,
  });

  const handleClick = (e) => {
    const value = e.target.innerText;
    const result = calculate(state, value);
    setState(result);
  };

  const handleTextChange = (e) => {
    setState({
      total: e.target.value,
    });
  };
  const buttons = [
    ["AC", "+/-", "%", "÷"],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-1  w-full border border-gray-400">
      <div className="w-full bg-gray-200 p-8">
        <h4
          className="text-end text-3xl"
          id="result"
          onChange={handleTextChange}
        >
          {state.total || state.next || 0}
        </h4>
      </div>
      <div className="flex w-full flex-col justify-between gap-1">
        {buttons.map((row) => (
          <div key={Math.random()} className="flex w-full gap-1">
            {row.map((button) => (
              <button
                key={button}
                type="button"
                id={button}
                className="w-full h-16 bg-gray-400 text-2xl"
                onClick={handleClick}
              >
                {button}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
