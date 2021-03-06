import React from "react";
import { Link } from "gatsby";

const activeLinkStyles = {
  borderBottomWidth: "thick",
  borderColor: "#E2DF00",
  cursor: "pointer",
  marginBottom: "1px",
};

const Navbar = () => {
  return (
    <div className="sticky top-0 py-3 md:px-20 shadow-sm flex flex-row justify-around md:justify-between text-sm md:text-md md:text-base font-bold md:mx-20 my-8 backdrop-filter backdrop-blur bg-white z-10">
      <Link
        to="/"
        activeStyle={activeLinkStyles}
        activeClassName="active"
        className="border-transparent border-b-2 hover:border-turbo-500"
      >
        • Welcome!
      </Link>
      <Link
        to="/users"
        activeStyle={activeLinkStyles}
        activeClassName="active"
        className="border-transparent border-b-2 hover:border-turbo-500"
      >
        • Users
      </Link>
      <Link
        to="/projects"
        activeStyle={activeLinkStyles}
        activeClassName="active"
        className="border-transparent border-b-2 hover:border-turbo-500"
      >
        • Projects
      </Link>
    </div>
  );
};

export default Navbar;
