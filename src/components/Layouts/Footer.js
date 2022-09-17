import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <p>copyright &copy; Babatunde {currentYear}</p>
    </footer>
  );
}

export default Footer;
