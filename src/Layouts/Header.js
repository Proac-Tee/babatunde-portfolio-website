import React, { useState } from "react";

import classes from "./Header.module.css";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  const navbar = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", navbar);

  return <header className={sticky ? "fixed" : "classes.header"}></header>;
};

export default Header;
