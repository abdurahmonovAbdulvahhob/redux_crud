import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const count = useSelector((state) => state.counter);

  return (
    <div className="text-center mt-10 text-2xl">
      <h2>Header</h2>
      {count}
    </div>
  );
};

export default Header;
