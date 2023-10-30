import { breakpoints } from "@/styles/breakpoints";
import { createUseStyles } from "react-jss";

export const videoStyles = createUseStyles({
  mainContainerVideo: {
    width: "100vw",
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "300px",
  },
  internalContainerVideo: {
    width: "100%",
    maxWidth: "1000px",
    display: "flex",
    flexDirection: "column",
    [`@media (max-width: ${breakpoints.lg}px)`]: { padding: "0px 20px" },
  },
  FirstRow: {
    width: "100%",
    maxWidth: "1000px",
    display: "flex",
    gap: "20px",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    [`@media (max-width: ${breakpoints.sm}px)`]: {
      flexDirection: "column",
      rowGap: "15px",
      justifyContent: "center",
    },
  },
  ContainerVideo: {
    width: "100%",
    height: "270px",
    display: "flex",
    alignItems: "center",
    [`@media (max-width: ${breakpoints.sm}px)`]: {},
  },
  buttomsContainerVideo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    marginLeft: "0px",
    [`@media (max-width: ${breakpoints.sm}px)`]: { width: "100%" },
  },
  buttomsVideo: {
    borderRadius: "8px",
    width: "100%",
    height: "30px",
    display: "flex",
    border: "none",
    "&:hover": {
      background: "grey",
    },
  },
  nameVideo: {
    display: "flex",
    gap: "20px",
    marginTop: "30px",
    fontSize: "35px",
    fontWeight: "bold",
    color: "blue",
    [`@media (max-width: ${breakpoints.lg}px)`]: {
      padding: "0px 10px",
    },
  },
  resumenVideo: {
    display: "flex",
    gap: "25px",
    marginTop: "30px",
    fontSize: "20px",
    padding: "20px",
    fontWeight: "bold",
  },
  resumenContentVideo: {
    display: "flex",
    gap: "20px",
    marginTop: "30px",
    textAlign: "justify",
    fontSize: "15px",
    padding: "10px",
    alignItems: "center",
    [`@media (max-width: ${breakpoints.lg}px)`]: {
      alignItems: "center",
    },
    externalMainData: {
      maxWidth: "1000px",
      width: "100%",
      display: "flex",
      justifyContent: "start",
    },
    mainDate: {
      marginTop: "70px",
      color: "#000000",
      fontWeight: "bold",
      display: "flex",
    },
  },
});
