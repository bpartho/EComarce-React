import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link className="text-2xl text-white font-bold" to="/">
        Fresh_Bazar
      </Link>
    </div>
  );
};

export default Logo;
