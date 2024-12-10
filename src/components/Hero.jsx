import React from "react";
import { useDispatch } from "react-redux";
import {
  decrement,
  divide,
  increment,
  multiply,
  reset,
} from "../redux/slices/counter-slice";

const Hero = () => {
  const dispatch = useDispatch();
  return (
    <div className="text-center flex flex-col gap-2 items-center">
      <h2>Hero</h2>
      <button
        className="w-36 py-2 px-3 bg-slate-500 rounded-lg active:bg-slate-700"
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
      <button
        className="w-36 py-2 px-3 bg-slate-300 rounded-lg"
        onClick={() => dispatch(decrement())}
      >
        {" "}
        decrement
      </button>
      <button
        className="w-36 py-2 px-3 bg-green-500 rounded-lg"
        onClick={() => dispatch(multiply(10))}
      >
        multiply
      </button>
      <button
        className="w-36 py-2 px-3 bg-blue-500 rounded-lg"
        onClick={() => dispatch(divide(10))}
      >
        divide
      </button>
      <button className="w-36 py-2 px-3 bg-red-700 rounded-lg text-slate-300" onClick={()=>dispatch(reset())}>reset</button>
    </div>
  );
};

export default Hero;
