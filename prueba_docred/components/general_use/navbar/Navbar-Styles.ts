import { createUseStyles } from "react-jss";
import React from "react";

export const navbarStyles = createUseStyles({
  mainNavbar: {
    position: "fixed",
    top: "0",
    right: "0",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    background: "#000000",
  },
  imgLogo: {
    height: "30px",
    width: "120px",
  },
  internalNavbar: {
    width: "100%",
    maxWidth: "1000px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerButtomsNavbar: {
    display: "flex",
    alignItems: "center",
    "& *": { fill: "#fff !important" },
  },
  containerIconsNavbar: {
    gap: "10px",
  },
});
