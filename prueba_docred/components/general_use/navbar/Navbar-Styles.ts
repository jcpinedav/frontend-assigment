import { createUseStyles } from "react-jss";
import React from "react";
import { breakpoints } from "@/styles/breakpoints";

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
  imgEEogo: {
    height: "30px",
    width: "120px",
  },
  internalNavbar: {
    width: "100%",
    maxWidth: "1000px",
    display: "flex",
    justifyContent: "space-between",
    [`@media (max-width: ${breakpoints.lg}px)`]: { padding: "0px 20px" },
    alignItems: "center",
  },
  containerButtomsNavbar: {
    display: "flex",
    alignItems: "center",
    "& *": { fill: "#fff !important" },
    [`@media (max-width: ${breakpoints.lg}px)`]: { display: "none" },
  },
  containerIconsNavbar: {
    [`@media (max-width: ${breakpoints.lg}px)`]: { display: "flex" },
    gap: "10px",
  },
  menuNavbar: {
    display: "none",
    background: "none",
    border: "none",
    [`@media (max-width: ${breakpoints.lg}px)`]: { display: "flex" },
  },
  containerButtomsResponsiveNavbar: {
    display: "none",
    flexDirection: "column",
    width: "100vw",
    position: "fixed",
    top: "50px",
    rigth: "0px",
  },
  containerButtomsResponsiveNavbarShow: {
    display: "flex",
  },
});
